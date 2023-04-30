export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Yusuf",
  lastName: "Mohammed",
  age: 21,
  location: "Nigeria",
};

const studentB: Student = {
  firstName: "Yusuf",
  lastName: "Akorede",
  age: 22,
  location: "Abu Dhabi",
};

const students: Array<Student> = [studentA, studentB];

export function renderStudents(students: Array<Student> ): void {
  const body = document.getElementsByTagName("body")[0]
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  firstNameHeader.textContent = "First Name";
  const lastNameHeader = document.createElement("th");
  lastNameHeader.textContent = "Last Name";
  const ageHeader = document.createElement("th");
  ageHeader.textContent = "Age";
  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(lastNameHeader);
  headerRow.appendChild(ageHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = student.lastName;
    row.appendChild(lastNameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = student.age.toString();
    row.appendChild(ageCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
	body.appendChild(table);
  });
}
renderStudents(students);
document.title = "Task One";
