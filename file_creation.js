const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

(async () => {
	try{
		await writeFile('data.txt',`Time @ ${new Date()}`);
		console.log("File created");
	}catch(err){
		console.log(err);
	}
})();