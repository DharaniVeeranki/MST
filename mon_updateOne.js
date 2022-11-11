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
//for updating..
var myquery={name:"Bhavana"};
var newvalues={$set:{age:12,phno:1111111111}};
nm.updateOne(myquery,newvalues,function(error,data){
	if(error){
		console.log(error);
	}
	else{
		console.log("Updated");	
	}
});