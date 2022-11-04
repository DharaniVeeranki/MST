var express=require('express')
var app=express()
app.get('/',function(req,res){
	res.send("<h1>Welcome to home page</h1>")
})
app.get('/cse/',function(req,res){
	res.send("<h1>CSE Department</h1>")
})
app.get('/it/',function(req,res){
	res.send("<h1>IT Department</h1>")
})
app.get('/ece/',function(req,res){
	res.send("<h1>ECE Department</h1>")
})
app.get('/thank/',function(req,res){
	res.send("<h1>Thank you for visiting</h1>")
})
var server=app.listen(8100,function(){
	console.log("Listening to port 8100..")
})