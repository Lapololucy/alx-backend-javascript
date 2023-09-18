const fs = require('fs');

module.exports = function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }
  // read file
  const data = fs.readFileSync(path, 'utf8');
  const dbData = data.split('\n')
    .map((data) => data.split(','))
    .filter((data) => data.length === 4 && data[0] !== 'firstname')
    .map((data) => ({
      firstName: data[0],
      lastName: data[1],
      age: data[2],
      field: data[3],
    }));
  const sweField = dbData
    .filter((data) => data.field === 'SWE')
    .map((data) => data.firstName);
  const csField = dbData
    .filter((data) => data.field === 'CS')
    .map((data) => data.firstName);
  console.log(`Number of students: ${sweField.length + csField.length}`);
  console.log(`Number of students in CS: ${csField.length}. List: ${csField.join(', ')}`);
  console.log(`Number of students in SWE: ${sweField.length}. List: ${sweField.join(', ')}`);
};
