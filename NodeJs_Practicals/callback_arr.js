function performTask(data, handleTask){
    console.log("Task initiated");
    setTimeout(()=>{
        console.log("Convert data:",data," to upper case");
        handleTask(null, data.toUpperCase());
    }, 3000);
}

const handleTask = (err, result) =>{
    if(err){
        console.error("Error occurred: ",err);
        return;
    }else{
        console.log("Final Result: ",result);
    }
}

console.log("Lets start...");
performTask("i love listening music", handleTask);
console.log("Lets start with another task without waiting");