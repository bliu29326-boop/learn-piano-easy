"""Render the original Keytrail geometric piano mark at install/favicon sizes."""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public/icons'
image = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
d = ImageDraw.Draw(image)
def box(rect, radius, fill):
    d.rounded_rectangle(tuple(v * 2 for v in rect), radius=radius * 2, fill=fill)
box((0, 0, 512, 512), 112, '#245c42')
for rect in [(112, 172, 200, 404), (212, 140, 300, 404), (312, 108, 400, 404)]:
    box(rect, 15, '#fcfdf9')
for rect in [(178, 160, 226, 297), (278, 128, 326, 265)]:
    box(rect, 8, '#142f23')
# A rising trail above the piano, drawn from an original polygon.
d.polygon([(240,264),(280,224),(332,187),(394,158),(474,139),(556,134),(516,176),(466,211),(406,236),(332,254)], fill='#d6ad63')
for size in [192, 512]:
    image.resize((size, size), Image.Resampling.LANCZOS).save(OUT / f'icon-{size}.png')
image.resize((256, 256), Image.Resampling.LANCZOS).save(OUT / 'favicon.ico', sizes=[(16,16),(32,32),(48,48),(64,64),(128,128),(256,256)])
preview = Image.new('RGB', (700, 280), '#f2f5f2')
preview.paste(image.resize((240,240),Image.Resampling.LANCZOS),(20,20),image.resize((240,240),Image.Resampling.LANCZOS))
for x,size in [(320,16),(380,32),(460,48),(560,64)]:
    mark=image.resize((size,size),Image.Resampling.LANCZOS);preview.paste(mark,(x,120),mark)
preview.save(ROOT / 'design/keytrail-icon-preview.png')
print({'generated':['icons/icon-192.png','icons/icon-512.png','icons/favicon.ico'], 'preview':'design/keytrail-icon-preview.png'})
