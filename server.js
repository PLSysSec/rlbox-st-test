'use strict';
const express = require('express')
const app = express()

app.use(express.static('static'))

function mkImages(nr) {
  let str = "";
  for(let i = 0; i < nr; i++) {
    str += `<img src="http://host${i}.total${nr}.scaling.localhost:1337/img.jpeg"/>\n`;
  }
  return str;
}
 
app.get('/jpeg-test', function (req, res) {
  const nrImages =  req.query.nr || 10;
  res.send(`<html><head></head><body>
    ${mkImages(nrImages)}
    </body></html>`);
})
 
app.listen(1337)
// http://localhost:1337/ - zlib test
// http://localhost:1337/jpeg-test?nr=1500 - sandbox scaling test
