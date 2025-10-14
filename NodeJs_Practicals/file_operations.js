const fs = require('fs');

const data = "Node.js is a powerful server"
fs.writeFile('example.txt', data, (err)=>{
    if(err){
        return console.error("File writing error");
    }else{
        console.log("File written successfully");
    }
});


fs.readFile('example.txt', (error,data)=>{
    if(error){
        return console.error("Error in file reading: ",error);
    }
    console.log("File read: ",data.toString());
});

// fs.open("example.txt",'r+',(error, fd)=>{
//     if(error){
//         return console.error("Error in opening file",error)
//     }
//     console.log("File opened successfully");
// });