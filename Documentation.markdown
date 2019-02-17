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
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://sayuka-api-v2.herokuapp.com/api/v2/key=<Your Token>/neko",
      "path": "url",
      "storage": "1",
      "varName": "INFO.URL",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${tempVars(\"INFO.URL\")}",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
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

**Requires** ***node-superfetch***

```js
const request = require('node-superfetch')
 let { body } = await request.get('https://raw.githubusercontent.com/Hentaiartz/SayukaAPI/master/api/v2/lewrd.json')
let index = 'url' +  Math.floor(Math.random() * 210) 
message.channel.send(JSON.parse(body)[index])
```
The format is the same you just have to change Endpoint

