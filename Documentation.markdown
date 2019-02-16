# Quickstart
In this documentation you can find basic examples of how to obtain API information

**Advice**

Create a random number generator of the number 0-{most of the answers}. Include it in the patch: url{your random number}


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
      "max": "200",
      "name": "Generate Random Number"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://raw.githubusercontent.com/Hentaiartz/SayukaAPI/master/api/v2/neko.json",
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
import random

def get_links(url):
    json_f = request.urlopen(url).read().decode('utf-8')
    json_final = json.loads(json_f)
    
    return json_final

def random_link(links):
    list_keys = [x for x in links]
    index = random.randint(0,len(list_keys)-1)
    final = list_keys[index-1]

    return final

def link(election, context = ''):
    if str(election).lower() == 'neko':
        my_links = get_links(url = 'https://raw.githubusercontent.com/Hentaiartz/SayukaAPI/master/api/v2/neko.json')
        key = random_link(my_links)
        return [my_links.get(key),key]
    elif str(election).lower() == 'rape':
        my_links = get_links(url = 'https://raw.githubusercontent.com/Hentaiartz/SayukaAPI/master/api/v2/rape.json')
        key = random_link(my_links)
        return [my_links.get(key),key]
```
The format is the same you just have to change Endpoint

# js (Java Script)
A basic example of how to use the api in JS

```js
