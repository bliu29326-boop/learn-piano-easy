"""Offline release audit. Prints metadata and findings, never secret values."""
from pathlib import Path
import hashlib, html, json, re, stat, subprocess
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1]
OUT = Path('/root/.hermes/projects/online-piano-practice/evidence/release-audit.json')
PRIVATE = Path('/root/.config/keytrail/worker-secrets.json')
assert stat.S_IMODE(PRIVATE.stat().st_mode) == 0o600, 'Private config must be mode600'
config = json.loads(PRIVATE.read_text())
protected = ['AUTH_SECRET', 'CONTACT_DATA_KEY', 'GOOGLE_CLIENT_SECRET', 'STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET', 'EMAIL_API_KEY']
values = {key: config[key].encode() for key in protected}
assert all(len(value) >= 16 for value in values.values()), 'Missing real configured secret'
paths = subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode().split('\0')
source = sorted({path for path in paths if path and (ROOT/path).is_file()})
built = sorted(path for path in (ROOT/'dist').rglob('*') if path.is_file())
findings = []
source_hashes, built_hashes = {}, {}
shapes = re.compile(rb'\b(?:(?:sk|rk)_(?:test|live)_[A-Za-z0-9]{20,}|whsec_[A-Za-z0-9]{20,}|GOCSPX-[A-Za-z0-9_-]{20,})')
for label, path in [(name,ROOT/name) for name in source] + [(str(path.relative_to(ROOT)),path) for path in built]:
    data = path.read_bytes()
    (built_hashes if label.startswith('dist/') else source_hashes)[label] = hashlib.sha256(data).hexdigest()
    for key, value in values.items():
        if value in data: findings.append({'path':label,'field':key,'kind':'actual private value'})
    if shapes.search(data): findings.append({'path':label,'kind':'credential-shaped text; inspect privately'})
assert not findings, json.dumps(findings)
assert not any('/piano-midi/' in str(path.relative_to(ROOT/'dist')) for path in built), 'Forbidden built repertoire'
catalog = json.loads((ROOT/'dist/songs/catalog.json').read_text())
assert len(catalog) == 422
assert not re.search(r'piano-midi(?:\.de|/)|CC BY-SA',json.dumps(catalog),re.I)
assert not (ROOT/'dist/sponsor/index.html').exists()
assert max(path.stat().st_size for path in built) < 25*1024*1024
index = json.loads((ROOT/'dist/cache-groups.json').read_text())
def keys(value):
    if isinstance(value,dict):
        for key,item in value.items(): yield key; yield from keys(item)
    elif isinstance(value,list):
        for item in value: yield from keys(item)
private_cache_paths = [key for key in keys(index) if re.match(r'^(?:\./)?(?:api|account)(?:/|$)',key)]
assert not private_cache_paths, private_cache_paths
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.h1s=[]; self.h1=False; self.main=False; self.ignore=0; self.text=[]; self.description=None; self.canonical=None; self.images=[]; self.title=''; self.in_title=False
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='main':self.main=True
        if tag in ['script','style']:self.ignore+=1
        if tag=='h1':self.h1=True;self.h1s.append('')
        if tag=='title':self.in_title=True
        if tag=='meta' and attrs.get('name')=='description':self.description=attrs.get('content')
        if tag=='link' and attrs.get('rel')=='canonical':self.canonical=attrs.get('href')
        if tag=='img':self.images.append(attrs.get('src'))
    def handle_endtag(self,tag):
        if tag=='main':self.main=False
        if tag in ['script','style']:self.ignore=max(0,self.ignore-1)
        if tag=='h1':self.h1=False
        if tag=='title':self.in_title=False
    def handle_data(self,data):
        if self.main and not self.ignore:self.text.append(data)
        if self.h1:self.h1s[-1]+=data
        if self.in_title:self.title+=data
pages=[]
for route in ['/','/learn-piano-as-an-adult/','/piano-for-beginners/']:
    path=ROOT/'dist'/route.strip('/')/'index.html' if route!='/' else ROOT/'dist/index.html'
    parser=Page();parser.feed(path.read_text())
    words=len(re.findall(r"\b[A-Za-z]+(?:['’-][A-Za-z]+)*\b",' '.join(parser.text)))
    assert len(parser.h1s)==1 and words>=300 and parser.description
    assert parser.canonical=='https://keytrail-dev.pages.dev'+route
    assert parser.images and all((ROOT/'dist'/image.lstrip('/')).is_file() for image in parser.images)
    pages.append({'route':route,'title':parser.title,'description':parser.description,'h1':parser.h1s[0],'main_english_words':words,'images':parser.images})
assert len({page['title'] for page in pages})==3
assert len({page['description'] for page in pages})==3
manifest=ROOT/'docs/keytrail-asset-manifest.json'
result={'scope':'Current nonignored source plus actual dist; actual private-value and bounded credential-shape scan. Not a complete security audit.','source_files_scanned':len(source),'built_files_scanned':len(built),'protected_private_fields':protected,'findings':findings,'largest_built_file_bytes':max(path.stat().st_size for path in built),'private_cache_paths':private_cache_paths,'public_pages':pages,'asset_manifest_sha256':hashlib.sha256(manifest.read_bytes()).hexdigest(),'static_sha256':{name:hashlib.sha256((ROOT/'dist'/name).read_bytes()).hexdigest() for name in ['app.js','app.css','sw.js','cache-groups.json']}}
OUT.parent.mkdir(parents=True,exist_ok=True);OUT.write_text(json.dumps(result,indent=2)+'\n')
result['source_tree_sha256'] = hashlib.sha256(json.dumps(source_hashes,sort_keys=True).encode()).hexdigest()
result['built_tree_sha256'] = hashlib.sha256(json.dumps(built_hashes,sort_keys=True).encode()).hexdigest()
OUT.write_text(json.dumps(result,indent=2)+'\n')
(OUT.parent/'release-source-hashes.json').write_text(json.dumps(source_hashes,sort_keys=True,indent=2)+'\n')
(OUT.parent/'release-dist-hashes.json').write_text(json.dumps(built_hashes,sort_keys=True,indent=2)+'\n')
print(json.dumps(result,indent=2))
