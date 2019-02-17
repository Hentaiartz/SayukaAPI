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
# Imports "requests" a very useful package to use http methods, you can install it via pip
import requests

# Your api key
key = 'Your Key'
# http method "GET" using the api key
getting = requests.get(url = 'https://sayuka-api-v2.herokuapp.com/api/v2/key=%s/rape'%key)
# Now that the json is on getting variable you can do whatever you want

# This makes the json that the api gave to you a dictionary (it was a string) and gets the url key
link = getting.json()['url']
```
The format is the same you just have to change Endpoint

# js (Java Script)
A basic example of how to use the api in JS

**Requires** ***node-superfetch***

```js
const request = require('node-superfetch')
let { body } = await request.get('https://sayuka-api-v2.herokuapp.com/api/v2/key=Your Key/neko')
let link = body.url

const embed = new Discord.RichEmbed()
.setTitle("Disfrutalo")
.setImage(link)
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`SakuyaApi`)

message.channel.send(embed)
```
The format is the same you just have to change Endpoint

