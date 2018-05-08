const st = require('st')
const http = require('http')
 
http.createServer(
  st(__dirname + '/static')
).listen(1337)
