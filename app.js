const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHeader(200, {"content-type":"text/plain"});
    res.end("Node js Application is running!");
});

server.listen(3020, ()=>{
    console.log("Node s Application is running on port 3020 ");
});