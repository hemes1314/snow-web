// vue-cli
/*
npm install vue 
npm install --global vue-cli
vue init webpack snow-web
cd snow-web
npm install
npm run dev

*/
var express = require('express');
var app = express();
var url = require('url');

app.use(express.static('./statics'));
 
app.get('/*', function (req, res) {
	// 解析请求，包括文件名
	var pathname = url.parse(req.url).pathname;
	// 输出请求的文件名
	console.log("Request for " + pathname + " received.");
	res.sendFile( __dirname + "/" + pathname.substr(1) );
})

var server = app.listen(8088, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})