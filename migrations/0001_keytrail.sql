PRAGMA foreign_keys=ON;
CREATE TABLE kt_users (
 id TEXT PRIMARY KEY, google_sub TEXT NOT NULL UNIQUE, name TEXT NOT NULL, email TEXT NOT NULL, created_at INTEGER NOT NULL,
 stripe_customer_id TEXT UNIQUE
);
CREATE TABLE kt_sessions (token_hash TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES kt_users(id),expires_at INTEGER NOT NULL,created_at INTEGER NOT NULL);
CREATE INDEX kt_sessions_expiry ON kt_sessions(expires_at);
CREATE TABLE kt_oauth (state_hash TEXT PRIMARY KEY,browser_hash TEXT NOT NULL,verifier TEXT NOT NULL,nonce TEXT NOT NULL,return_to TEXT NOT NULL,expires_at INTEGER NOT NULL,consumed_at INTEGER);
CREATE INDEX kt_oauth_expiry ON kt_oauth(expires_at);
CREATE TABLE kt_orders (
 id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES kt_users(id),site TEXT NOT NULL,account_id TEXT NOT NULL,environment TEXT NOT NULL CHECK(environment='development'),
 price_id TEXT NOT NULL,product_id TEXT NOT NULL,origin TEXT NOT NULL,checkout_email TEXT NOT NULL,customer_id TEXT,session_id TEXT UNIQUE,subscription_id TEXT UNIQUE,checkout_url TEXT,
 status TEXT NOT NULL DEFAULT 'pending',created_at INTEGER NOT NULL,expires_at INTEGER NOT NULL,proof_revision INTEGER NOT NULL DEFAULT 0,
 subscription_status TEXT,cancel_at_period_end INTEGER NOT NULL DEFAULT 0,provider_period_end INTEGER
);
CREATE INDEX kt_orders_owner ON kt_orders(user_id,created_at);
CREATE TABLE kt_checkout_slots (user_id TEXT PRIMARY KEY REFERENCES kt_users(id),order_id TEXT NOT NULL UNIQUE REFERENCES kt_orders(id));
CREATE TABLE kt_checkout_keys (user_id TEXT NOT NULL,request_key TEXT NOT NULL,order_id TEXT NOT NULL REFERENCES kt_orders(id),PRIMARY KEY(user_id,request_key));
CREATE TABLE kt_coverage (
 invoice_id TEXT PRIMARY KEY,order_id TEXT NOT NULL REFERENCES kt_orders(id),subscription_id TEXT NOT NULL,customer_id TEXT NOT NULL,
 payment_intent_id TEXT NOT NULL UNIQUE,charge_id TEXT NOT NULL UNIQUE,amount_paid INTEGER NOT NULL CHECK(amount_paid=999),currency TEXT NOT NULL CHECK(currency='usd'),
 period_start INTEGER NOT NULL,period_end INTEGER NOT NULL,revoked INTEGER NOT NULL DEFAULT 0,refunded_amount INTEGER NOT NULL DEFAULT 0,disputed INTEGER NOT NULL DEFAULT 0,
 verified_at INTEGER NOT NULL,source TEXT NOT NULL
);
CREATE INDEX kt_coverage_order ON kt_coverage(order_id,period_end);
CREATE TABLE kt_stripe_events (id TEXT PRIMARY KEY,type TEXT NOT NULL,processed_at INTEGER NOT NULL);
CREATE TABLE kt_contacts (
 reference TEXT PRIMARY KEY,idempotency_hash TEXT NOT NULL UNIQUE,payload_hash TEXT NOT NULL,email_hash TEXT NOT NULL,ip_hash TEXT NOT NULL,
 data TEXT NOT NULL,mail_data TEXT,status TEXT NOT NULL DEFAULT 'pending',provider_message_id TEXT,created_at INTEGER NOT NULL,accepted_at INTEGER,
 first_attempt_at INTEGER,attempts INTEGER NOT NULL DEFAULT 0,next_at INTEGER NOT NULL DEFAULT 0,lease_token TEXT,lease_until INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX kt_contacts_email ON kt_contacts(email_hash,created_at);
CREATE INDEX kt_contacts_ip ON kt_contacts(ip_hash,created_at);
