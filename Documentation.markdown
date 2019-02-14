# Quickstart
In this documentation you can find basic examples of how to obtain API information

# DBM (Discord Bot Maker)

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
      "path": "$[0].url${tempVars(\"Random_Number\")}",
      "storage": "1",
      "varName": "INFO.URL",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    }
  ]
}
```
