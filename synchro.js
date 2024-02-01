var fs=require("fs");
//asynchronous read- it'll not do anything when its reading the file
fs.readFile('input.txt',function(err,data){

    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read: "+data.toString());
});

//synchronous read- it'll execute a problem side by side while reading
var data= fs.readFileSync('input.txt');
console.log("Synchronous read: "+data.toString());
console.log("Program Ended");