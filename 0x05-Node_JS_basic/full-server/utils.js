import fs from 'fs';

function getStudents(data) {
  const rows = data
    .split('\n')
    .slice(1)
    .filter((row) => row.length > 0);
  const students = [];
  rows.forEach((row) => {
    students.push(row.split(','));
  });
  const CS = students
    .filter((student) => student.includes('CS'))
    .map((student) => student[0]);
  const SW = students
    .filter((student) => student.includes('SWE'))
    .map((student) => student[0]);

  return { CS, SW };
}

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data === undefined) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(getStudents(data));
      }
    });
  });
}
