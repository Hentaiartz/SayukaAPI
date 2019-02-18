{
  "name": "SAYUKA_API",
  "permissions": "NONE",
  "restriction": "0",
  "_id": "DbqBZ",
  "actions": [
    {
      "comment": "Info + Get a key: https://github.com/Hentaiartz/SayukaAPI",
      "color": "#800040",
      "name": "Comment"
    },
    {
      "token": "",
      "user": "",
      "pass": "",
      "url": "https://sayuka-api-v2.herokuapp.com/api/v2/key=Your Key/neko",
      "path": "url",
      "storage": "1",
      "varName": "INFO.URL",
      "debugMode": "1",
      "headers": "",
      "name": "Store Json From WebAPI"
    },
    {
      "title": "SayukaAPI use",
      "author": "",
      "color": "RANDOM",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "${tempVars(\"INFO.URL\")}",
      "thumbUrl": "",
      "storage": "1",
      "varName": "",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "",
      "message": "SayukaAPI",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "",
      "channel": "0",
      "varName2": "",
      "storage3": "0",
      "varName3": "",
      "name": "Send Embed Message"
    }
  ]
}
