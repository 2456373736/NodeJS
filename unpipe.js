var fs= require("fs");
var reader= fs.createReadStream('test.txt');
var writer= fs.createWriteStream('test1.txt');
writer.on('unpipe',()=>{
    console.log('unpiping occured');
});
reader.unpipe(writer);