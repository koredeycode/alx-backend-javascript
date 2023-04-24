export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((elem) => {
      const ret = elem;
      const newGrade = newGrades.filter((e) => e.studentId === ret.id);
      ret.grade = newGrade.length ? newGrade[0].grade : 'N/A';
      return ret;
    });
}
