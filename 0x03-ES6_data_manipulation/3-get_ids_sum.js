export default function getStudentsByLocation(students) {
  return students.reduce((acc, element) => element.id + acc, 0);
}
