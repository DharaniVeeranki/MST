const prompt=require("prompt-sync")();
var a=prompt("enter a number:",a);
a=parseInt(a);
if(a%2==0){
	console.log("even number");
}
else{
	console.log("odd number");
}