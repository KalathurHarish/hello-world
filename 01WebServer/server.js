let http=require('http');
let port=3000;
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello to the brave!!")
}).listen(port)