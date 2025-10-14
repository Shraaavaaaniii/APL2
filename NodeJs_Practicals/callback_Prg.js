function performTask(data, callback){
    console.log(`Processing data ${data}`);

    setTimeout(()=>{
        const result = `Processed: ${data.toUpperCase()}`;
        callback(null, result);
    }, 2000);
}

function handleResult(error, processedData){
    if(error){
        console.error(`An error occurred: ${error}`);
    }else{
        console.log(`Callback received: ${processedData}`);
    }
}

console.log("Starting task...");
performTask("node.js is a runtime environment", handleResult);
console.log("Task initiated continue with other oprations");