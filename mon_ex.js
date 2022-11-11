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
//for inserting 1 record
//const data=new nm({name:'Sampath',age:32,phno:9876543210});
//data.save();
//fetching 1st record in the data(findOne)...
//console.log("Fetching 1st record");
nm.findOne({},function(err,data){
	if(err){
		console.log(error);
	}
	else{
		console.log("First function call:",data);
	}
});
//for fetching all records in the data(find)..
//console.log("Fetching all records");
nm.find({},function(err,data){
	if(err){
		console.log(error);
	}
	else{
		console.log("All function call:",data);
	}
});
//finding specific record..
nm.find({age:32},function(err,data){
	if(err){
		console.log(error);
	}
	else{
		console.log("Specific function call:",data);
	}
});
//for deleting..
nm.deleteOne({name:'Sampath'}).then(function(){
	console.log("data deleted");
}).catch(function(error){
	console.log(error);
});