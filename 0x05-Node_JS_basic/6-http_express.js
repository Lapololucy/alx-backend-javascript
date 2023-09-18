const express = require('express');

const hostname = 'localhost';
const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

module.exports = app;
