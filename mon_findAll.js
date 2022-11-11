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