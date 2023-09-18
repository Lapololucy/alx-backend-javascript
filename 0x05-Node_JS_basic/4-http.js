const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

const app = server.listen(1245);

module.exports = app;
