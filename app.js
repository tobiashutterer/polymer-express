// configure API
var express = require('express') // express 4
//  , environment = require('./env.js')
  , app = express()
  , port = 3000
  , ipaddr = "localhost";

//  , port = environment.PORT
//  , ipaddr = environment.IPDR;

app.use("/components", express.static(__dirname + '/components'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, ipaddr, function() {
  console.log("Server up on " + ipaddr + ":" + port);
});
