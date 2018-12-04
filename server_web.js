var server_host="127.0.0.1:8081";

var express = require('express');
var app = express();
var url = require('url');

app.use(express.static('./statics'));
 
app.get('/*', function (req, res) {
	 // 解析请求，包括文件名
	 var pathname = url.parse(req.url).pathname;
	 console.log(pathname);console.log(pathname.indexOf("server_") > 0);
	 if(pathname.indexOf("server_") > 0) {
		 pathname.replace("server_",server_host);
		 res.sendFile( "http://" + pathname );
	 } else {
		 // 输出请求的文件名
		 console.log("Request for " + pathname + " received.");
		 res.sendFile( __dirname + "/" + pathname.substr(1) );
	 }
})
app.post('/*', function (req, res) {
	 // 解析请求，包括文件名
	 var pathname = url.parse(req.url).pathname;
	 console.log(pathname);console.log(pathname.indexOf("server_") > 0);
	 if(pathname.indexOf("server_") > 0) {
		 pathname.replace("server_",server_host);
		 res.sendFile( "http://" + pathname );
	 } else {
		 // 输出请求的文件名
		 console.log("Request for " + pathname + " received.");
		 res.sendFile( __dirname + "/" + pathname.substr(1) );
	 }
})

var server = app.listen(8088, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})