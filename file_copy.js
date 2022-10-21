var fs=require('fs');
console.log("Copying text from 1 file to another");
console.log("Reading the existing file");
fs.readFile('copy.txt','utf8',function(err,data){
	if(err)
		console.log(error);
	else{
		console.log(data);
		fs.writeFile('paste.txt',data,'utf8',function(err){
			if(err)
				console.log(error);
			else
				console.log("Content has been pasted");
		});
	}
});