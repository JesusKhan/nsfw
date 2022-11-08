var http = require("http"); 

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is Home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is Contact Page.</p></body></html>");
    res.end();
  } else res.end("Invalid Request!");
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});