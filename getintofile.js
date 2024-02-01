var fs = require("fs");
var buf= new Buffer(1024);
console.log("Going to open a file");
fs.open('input.txt','r+',function(err,fd)
{

    if(err) return console.error(err);
    console.log("Filed opened successfully!");
    console.log("Going to read a file!");
    fs.read(fd,buf,0,buf.length,0,function(err,bytes)
    {

        if(err) console.log(err);
        console.log(bytes+" bytes read");
        //Print only read bytes
        if(bytes>0) console.log(buf.slice(0,bytes).toString());
        fs.close(fd,function(err)
        {
            if(err)
            {
                console.log(err);
            }
            console.log("File closed successfully!");
        });
    });
});
