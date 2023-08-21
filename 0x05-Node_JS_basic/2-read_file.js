const fs = require('fs');

function printStudents(data) {
  const rows = data.split('\n').slice(1);
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
      .join(', ')}`
  );
  console.log(
    `Number of students in SWE: ${swestudents.length}. List: ${swestudents
      .map((student) => student[0])
      .join(', ')}`
  );
}
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    printStudents(data);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
