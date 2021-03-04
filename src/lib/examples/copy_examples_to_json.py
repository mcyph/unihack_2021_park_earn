import json
import pathlib

out = {}
for js_path in pathlib.Path('').rglob('*.js'):
    print(js_path)
    out[js_path.name.rpartition('.')[0]] = js_path.read_text(encoding='utf-8')

with open("examplesListing.json", "w", encoding="utf-8") as f:
    f.write(json.dumps(out, ensure_ascii=False, indent=2))
