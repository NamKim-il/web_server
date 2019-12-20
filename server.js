const http = require('http');
const fs=require('fs')
const url=require('url');
const server = http.createServer( (request,response) =>{
    // response.writeHead(200,{
    //     'Contente-Type': 'text/plain'
    // });
    // response.write('Hello world');
    const path=url.parse(request.url).pathname;
    if(path==='/'){
        fs.readFile('index.html',(err,data)=>{
            response.writeHead(200,{
                'Content-type' : 'text/html'
            });
            response.write(data);
            response.end();
         });
    }
    else{
        response.writeHead(404,{
            'Contente-Type': 'text/plain'
         });
        response.write('Not found');
        response.end();
    }
});

server.listen(8081);
console.log('Listening at localhost:8081');
