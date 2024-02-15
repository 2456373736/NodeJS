<<<<<<< HEAD
var fs= require("fs");
console.log("Going to create a directory /tmp/test");
fs.mkdir('/tmp/test',function(err){
    if(err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
=======
var fs= require("fs");
console.log("Going to create a directory /tmp/test");
fs.mkdir('/tmp/test',function(err){
    if(err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
>>>>>>> 3cf5588df582ca5bf6ca8cea8bb47ad8a01e51f5
});