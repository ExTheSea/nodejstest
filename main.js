var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/*', function (req, res) {
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
   res.send(json);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})