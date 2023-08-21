const http = require('http');
const countStudents = require('./3-read_file_async');

async function printStudents(data) {
  try {
    const rows = data.split('\n').slice(1);
    const students = [];
    rows.forEach((row) => {
      students.push(row.split(','));
    });
    let ret = '';
    const csstudents = students.filter((student) => student.includes('CS'));
    const swestudents = students.filter((student) => student.includes('SWE'));
    ret += `Number of students: ${students.length}`;
    ret += `Number of students in CS: ${csstudents.length}. List: ${csstudents
      .map((student) => student[0])
      .join(', ')}`;
    ret += `Number of students in SWE: ${
      swestudents.length
    }. List: ${swestudents.map((student) => student[0]).join(', ')}`;
    return ret;
  } catch (err) {
    console.log(err);
  }
}

// console.log(printStudents());

async function getStudents() {
  data = await countStudents('database.csv');
  return data;
}
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents('database.csv').then((data) => {
      console.log(data);
      res.end(printStudents(data));
    });
  }
});

app.listen(1245);
module.exports = app;
