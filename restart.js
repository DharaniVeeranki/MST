const http=require('http');
var server=http.createServer((req,res)=>{
	res.write("Hello world");
	res.write("It will restart the server");
	res.end();
});
server.listen(3000);
console.log("server started");
