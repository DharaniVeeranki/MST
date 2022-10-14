var fs=require("fs");
console.log("Appending a file");
fs.writeFile('ex1.txt','Appending the existing file using appendFile..',function(err){
	if(err){
		return console.error(err);
	}
	console.log("data appended successfully");	
});