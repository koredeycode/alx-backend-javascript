const fs = require('fs');

function printStudents(data) {
  const rows = data
    .split('\n')
    .slice(1)
    .filter((row) => row.length > 0);
  const students = [];
  rows.forEach((row) => {
    students.push(row.split(','));
  });
  const csstudents = students.filter((student) => student.includes('CS'));
  const swestudents = students.filter((student) => student.includes('SWE'));
  console.log(`Number of students: ${students.length}`);
  console.log(
    `Number of students in CS: ${csstudents.length}. List: ${csstudents
      .map((student) => student[0])
      .join(', ')}`,
  );
  console.log(
    `Number of students in SWE: ${swestudents.length}. List: ${swestudents
      .map((student) => student[0])
      .join(', ')}`,
  );
}

function countStudents(path) {
  return new Promise((resolve) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      printStudents(data);
      resolve(data);
    });
  });
}
module.exports = countStudents;
