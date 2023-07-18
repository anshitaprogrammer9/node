const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello I am anshita</h1>");
    resp.end();
}
).listen(5200);