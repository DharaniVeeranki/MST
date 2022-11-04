var express=require('express')
var app=express()
app.get('/',function(req,res){
	res.send('Express js ')
})
var server=app.listen(8000)