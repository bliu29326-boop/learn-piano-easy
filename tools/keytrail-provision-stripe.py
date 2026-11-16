"""Provision only the explicitly approved Keytrail Stripe sandbox objects.

Secrets are read from the authorized reference file, saved privately and never printed.
"""
import json
import os
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, ProxyHandler, build_opener

PRIVATE = Path('/root/.config/keytrail')
PRIVATE.mkdir(mode=0o700, parents=True, exist_ok=True)
os.chmod(PRIVATE, 0o700)
REFERENCE = Path('/root/.config/interactive-fiction/stripe-sandbox.json')
CONFIG = PRIVATE / 'stripe-provision.json'
SECRET = PRIVATE / 'stripe-secrets.json'
API_VERSION = '2025-06-30.basil'
ORIGIN = 'https://keytrail-dev.pages.dev'
ACCOUNT = 'acct_1UaHFNCx5ZHdkgDO'
SITE = 'keytrail-dev'
opener = build_opener(ProxyHandler({}))
ref = json.loads(REFERENCE.read_text())
key = ref['secret_key']
assert key.startswith(('sk_test_', 'rk_test_')), 'Not a sandbox key'


def call(method, path, fields=None, idem=None):
    headers = {'Authorization': 'Bearer ' + key, 'Stripe-Version': API_VERSION}
    if idem:
        headers['Idempotency-Key'] = idem
    data = None if fields is None else urlencode(fields).encode()
    req = Request('https://api.stripe.com/v1/' + path, data=data, headers=headers, method=method)
    with opener.open(req, timeout=45) as response:
        return json.load(response)


def save(path, data):
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(fd, 'w') as stream:
        json.dump(data, stream, indent=2)
    os.chmod(path, 0o600)


account = call('GET', 'account')
assert account['id'] == ACCOUNT
meta = {'metadata[site]': SITE, 'metadata[environment]': 'development', 'metadata[account_id]': ACCOUNT}
product = call('POST', 'products', {'name': 'Keytrail Plus', 'description': 'Worlds 3–8, advanced library versions and MIDI export. USD 9.99 per month.', 'active': 'true', **meta}, SITE + '-product-monthly-v1')
product = call('GET', 'products/' + product['id'])
assert product['livemode'] is False and product['metadata']['site'] == SITE
price = call('POST', 'prices', {'product': product['id'], 'currency': 'usd', 'unit_amount': '999', 'recurring[interval]': 'month', 'recurring[interval_count]': '1', 'active': 'true', **meta}, SITE + '-price-usd999-month-v1')
price = call('GET', 'prices/' + price['id'])
assert price['livemode'] is False and price['unit_amount'] == 999 and price['currency'] == 'usd'
assert price['recurring']['interval'] == 'month' and price['recurring']['interval_count'] == 1
secrets = {'STRIPE_SECRET_KEY': key, 'STRIPE_PRICE_ID': price['id'], 'STRIPE_ACCOUNT_ID': ACCOUNT, 'STRIPE_PROJECT_ID': SITE}
old = json.loads(CONFIG.read_text()) if CONFIG.exists() else {}
if old.get('webhook_id') and SECRET.exists():
    existing = json.loads(SECRET.read_text())
    webhook = call('GET', 'webhook_endpoints/' + old['webhook_id'])
    secrets['STRIPE_WEBHOOK_SECRET'] = existing['STRIPE_WEBHOOK_SECRET']
else:
    events = ['checkout.session.completed', 'checkout.session.expired', 'checkout.session.async_payment_succeeded', 'invoice.paid', 'invoice.payment_succeeded', 'invoice.payment_failed', 'customer.subscription.created', 'customer.subscription.updated', 'customer.subscription.deleted', 'charge.refunded', 'charge.dispute.created', 'charge.dispute.updated', 'charge.dispute.closed', 'charge.dispute.funds_withdrawn', 'charge.dispute.funds_reinstated']
    fields = {'url': ORIGIN + '/api/stripe/webhook', 'description': 'Keytrail development monthly subscriptions only', 'api_version': API_VERSION, **meta}
    fields.update({f'enabled_events[{i}]': event for i, event in enumerate(events)})
    webhook = call('POST', 'webhook_endpoints', fields, SITE + '-webhook-v1')
    secrets['STRIPE_WEBHOOK_SECRET'] = webhook['secret']
    save(SECRET, secrets)
    save(CONFIG, {'account_id': ACCOUNT, 'product_id': product['id'], 'price_id': price['id'], 'webhook_id': webhook['id'], 'api_version': API_VERSION, 'origin': ORIGIN})
    webhook = call('GET', 'webhook_endpoints/' + webhook['id'])
assert webhook['livemode'] is False and webhook['url'] == ORIGIN + '/api/stripe/webhook'
assert webhook['status'] == 'enabled' and webhook['api_version'] == API_VERSION
save(SECRET, secrets)
save(CONFIG, {'account_id': ACCOUNT, 'product_id': product['id'], 'price_id': price['id'], 'webhook_id': webhook['id'], 'api_version': API_VERSION, 'origin': ORIGIN})
print(json.dumps({'verified': True, 'account_id': ACCOUNT, 'product_id': product['id'], 'price_id': price['id'], 'unit_amount': price['unit_amount'], 'currency': price['currency'], 'recurring': price['recurring'], 'livemode': price['livemode'], 'webhook_id': webhook['id'], 'webhook_url': webhook['url'], 'events': webhook['enabled_events'], 'private_secret_file': str(SECRET)}))
