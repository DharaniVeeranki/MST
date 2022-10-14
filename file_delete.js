var fs=require("fs");
console.log("Deleting a file..");
fs.unlink('ex.txt',function(err){
	if(err){
		return console.error(err);
	}
	console.log("File deleted successfully");
});