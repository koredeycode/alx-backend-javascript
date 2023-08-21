const fs = require('fs');
const http = require('http');

const DB_FILE = process.argv[2] || '';
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

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DB_FILE)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        const errormsg = err instanceof Error ? err.message : err.toString();
        res.end(errormsg);
      });
  }
});

app.listen(1245);

module.exports = app;
