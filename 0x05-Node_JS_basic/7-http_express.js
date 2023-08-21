const fs = require('fs');
const express = require('express');

const DB_FILE = process.argv[2] || '';

const app = express();

function printStudents(data) {
  let ret = '';
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
  ret += `Number of students: ${students.length}\n`;
  ret += `Number of students in CS: ${csstudents.length}. List: ${csstudents
    .map((student) => student[0])
    .join(', ')}\n`;
  ret += `Number of students in SWE: ${swestudents.length}. List: ${swestudents
    .map((student) => student[0])
    .join(', ')}`;
  return ret;
}

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data === undefined) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(printStudents(data));
      }
    });
  });
}

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  countStudents(DB_FILE)
    .then((data) => {
      res.write(data);
    })
    .catch((err) => {
      const errormsg = err instanceof Error ? err.message : err.toString();
      res.write(errormsg);
    })
    .finally(() => {
      res.end();
    });
});

app.listen(1245);

module.exports = app;
