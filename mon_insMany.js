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
//for inserting many records
nm.insertMany([
	{name:'Sampath',age:32,phno:9876543210},
	{name:'Sameera',age:19,phno:4567788812},
	{name:'Bhavana',age:22,phno:9099543210},
	{name:'Swathi',age:29,phno:9800000210},
	{name:'Indu',age:19,phno:9111111210}
]).then(function(){
	console.log("Data inserted")
}).catch(function(error){
	console.log(error)
});