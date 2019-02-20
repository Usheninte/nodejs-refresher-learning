const http = require('http');

const server = http.createServer((req, res) => {
  // PARSE url AND mehtod
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Userpool | Home</title></head>');
    res.write('<body>');
    res.write('<h1>Hello Userpool</h1>');
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="username">');
    res.write('<button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  };

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Userpool | List of Users</title></head>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>User 1</li>')
    res.write('<li>User 2</li>')
    res.write('<li>User 3</li>')
    res.write('<li>User 4</li>')
    res.write('<li>User 5</li>')
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  };

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk);
    });

    return req.on('end', () => {
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  };
});

server.listen(3000);
