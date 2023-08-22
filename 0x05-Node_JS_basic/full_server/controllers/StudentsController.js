import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const DB_FILE = process.argv[2] || '';
    readDatabase(DB_FILE)
      .then((data) => {
        const output = [];
        Object.entries(data).forEach(([key, value]) => {
          output.push(
            `Number of students in ${key}: ${value.length}. List: ${value.join(
              ', ',
            )}`,
          );
        });

        res.write('This is the list of our students\n');
        res.status(200);
        res.write(output.join('\n'));
      })
      .catch((err) => {
        res.status(500);
        res.write(err.message);
      })
      .finally(() => {
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500);
      res.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((data) => {
          const students = data[major];
          res.status(200);
          res.write(`List: ${students.join(', ')}`);
        })
        .catch((err) => {
          res.status(500);
          res.write(err.message);
        })
        .finally(() => {
          res.end();
        });
    }
  }
}
