var fs=require("fs");
console.log("Writing in a file");
fs.writeFile('ex1.txt','writing in the file..',function(err){
	if(err){
		return console.error(err);
	}
	console.log("data written successfully");	
});