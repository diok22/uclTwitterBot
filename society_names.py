from scrapy.selector import Selector
import requests
import re

socs = []

for page in range(13):
    req = requests.get("http://studentsunionucl.org/clubs-societies/directory?page=" + str(page))

    sel = Selector(text=req.content)

    socs += (sel.xpath('//*[@id="block-system-main"]/div/div/div[2]/div/div[1]/a/div/h3/span/text()').extract())

print(socs)

weird_socs = []

for x in socs:
    if not re.search(r"\b(Society|Club)\b", x):
        weird_socs.append(x)

import json
with open("weird_socs.json", 'w') as f:
    json.dump(weird_socs, f)
