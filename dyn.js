'use strict';
const express = require('express')
const app = express()

app.use(express.static('static'))

function mkImages(nr) {
  let str = "";
  for(let i = 0; i < nr; i++) {
    str += `<img with="10px" height="10px" src="http://host${i}.lvh.me:3000/img.jpeg"/>\n`;
  }
  return str;
}
 
app.get('/jpeg-test', function (req, res) {
  const nrImages =  req.query.nr || 10;
  res.send(`<html><head></head><body>
    ${mkImages(nrImages)}
    </body></html>`);
})
 
app.listen(3000)
// http://localhost:3000/jpeg-test?nr=1500
