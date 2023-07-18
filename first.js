var http = require("http"); 
   
// Create server
http.createServer(function (req, res) { 
    
    // Send the HTTP header  
    // HTTP Status: 200 : OK 
    // Content Type: text/plain 
    // Write a response to the client
    res.write('Geeks For Geeks');
    // End the response 
    res.end();
   // The server object listens on port 5000
}).listen(5200);