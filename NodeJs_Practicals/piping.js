const fs = require("fs");

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

console.log("Piping input.txt to output.txt");

readableStream.pipe(writableStream);

writableStream.on("finish", function(){
    console.log("Piping is completed");
})

readableStream.on("error",function(err){
    console.log("Error occured during the reading"+err);
})

writableStream.on("error", function(err){
    console.log("Error occured during writing "+err);
})