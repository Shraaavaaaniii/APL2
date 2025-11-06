const fs = require('fs')

writableStream = fs.createWriteStream('example.txt', 'utf-8');
console.log("Writing to example.txt");

writableStream.write("Hello writing some text");
writableStream.write("This is a test of writable streams.\n");
writableStream.end("End of writing.\n");

writableStream.on("finish", function(){
    console.log("Finished writing on example.txt");
})
writableStream.on("error", function(err){
    console.error("Error writing file",err);
})