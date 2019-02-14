# Quickstart
In this documentation you can find basic examples of how to obtain API information

# DBM (Discord Bot Maker)
A basic example of how to use the api in DBM

```js
{
  "name": "SAYUKA_API",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "DbqBZ",
  "actions": [
    {
      "storage": "1",
      "varName": "Random_Number",
      "min": "1",
      "max": "40",
      "name": "Generate Random Number"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://raw.githubusercontent.com/Hentaiartz/SayukaAPI/master/api/v2/rape.json",
      "path": "url${tempVars(\"Random_Number\")}",
      "storage": "1",
      "varName": "INFO.URL",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    }
  ]
}
```
The format is the same you just have to change Endpoint

# py (Python)
A basic example of how to use the api in py

```py
import urllib.request as request
import json

url = 'https://raw.githubusercontent.com/Hentaiartz/SayukaAPI/master/api/v2/rape.json'
json_f = request.urlopen(url).read().decode('utf-8')
correct_json = json_f.replace("'",'"')
correct_json = correct_json.replace("[",' ')
correct_json = correct_json.replace("]",' ')
json_final = json.loads(correct_json)


for url in json_final:
    print(f'{url} is {json_final[url]}')
```
The format is the same you just have to change Endpoint
