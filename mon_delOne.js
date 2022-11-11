const express=require ('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/CSE_C",(err)=>{
	if(err)
		console.log("DB error");
	else
		console.log("DB connected");
});
const ns=new mongoose.Schema({
	name:String,
	age:Number,
	phno:Number
});
const nm=new mongoose.model("records",ns);
//for deleting one record..
nm.deleteOne({name:'Sampath'}).then(function(){
	console.log("data deleted");
}).catch(function(error){
	console.log(error);
});