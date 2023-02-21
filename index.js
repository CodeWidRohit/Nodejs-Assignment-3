const http=require("http"); 
const fs = require("fs");// create /update /delete 
const file=fs.readFileSync('index.html'); 
const server = http.createServer((req, res) => {
    res.writeHead(200,{
        'Content-type':'text/html'      
    })
    res.end(file);
});
server.listen(5000, () => console.log("Server is up at port no 5000"));
