const http = require('http');

const app = http.createServer((req, res) => {
  // console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);
module.exports = app;
