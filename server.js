const st = require('st')
const http = require('http')
 
mount = st( { path: __dirname + '/static'
      , cache : { content: false }
      })
http.createServer(function(req, res){
	console.log('Got a request');
    mount(req, res);
}).listen(1337)
