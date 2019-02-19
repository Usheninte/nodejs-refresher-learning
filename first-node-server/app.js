const http = require('http');

const server = http.createServer((req, res) => {
  // PARSING url AND method
  const url = req.url;
  const method = req.method;

  // REQUEST ROUTE TO HOME PAGE
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send </button></form></body>');
    res.write('</html>');
    return res.end();
  };

  // REDIRECT ROUTE TO MESSAGE PAGE
  if (url === '/message' && method === 'POST') {

  }

  // process.exit();
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
