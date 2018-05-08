const st = require('st')
const http = require('http')
 
http.createServer(
  st( { path: __dirname + '/static'
      , cache : { content: false }
      })
).listen(1337)
