const http = require('http');

const server = http.createServer((req, res) => {
  res.write('<html>')
  res.write('<head><title>Userpool</title></head>')
  res.write('<h1>Hello Userpool</h1>');
  res.write('</html>')
  res.end();
});

server.listen(3000);
