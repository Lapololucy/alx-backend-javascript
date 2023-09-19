const express = require('express');

const hostname = 'localhost';
const port = 1245;
const students = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  students(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
    res.end();
  }).catch((err) => res.end(err.message));
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
