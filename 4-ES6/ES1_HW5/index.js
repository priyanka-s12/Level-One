console.log('Question 1: ');
const studentMarks = [
  {
    name: 'Rahul',
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90,
  },
  {
    name: 'Amit',
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95,
  },
  {
    name: 'Priya',
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87,
  },
];

const marksForComputer = [88, 92, 95];
//adding computer marks
console.log('1.1: Students Data with Computer Marks: ');
for (let i = 0; i < studentMarks.length; i++) {
  studentMarks[i].computer = marksForComputer[i];

  console.log(
    `Name: ${studentMarks[i].name}, Roll No: ${studentMarks[i].rollNo}, Hindi: ${studentMarks[i].hindi}, English: ${studentMarks[i].english}, Maths: ${studentMarks[i].maths}, Computer: ${studentMarks[i].computer}`
  );
}

console.log('\n');

const marksForScience = [82, 90, 88];
//adding science marks
for (let i = 0; i < studentMarks.length; i++) {
  studentMarks[i].science = marksForScience[i];
}

console.log('1.2: Updated Students Data with Science Marks: ');

function printStudentsData(studentMarks) {
  for (let i = 0; i < studentMarks.length; i++) {
    console.log(
      `Name: ${studentMarks[i].name}, Roll No: ${studentMarks[i].rollNo}, Hindi: ${studentMarks[i].hindi}, English: ${studentMarks[i].english}, Maths: ${studentMarks[i].maths}, Computer: ${studentMarks[i].computer}, Science: ${studentMarks[i].science}`
    );
  }
}

printStudentsData(studentMarks);

console.log('\n');

console.log('Question 2: ');
const kaveriData = {
  name: 'Kaveri',
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86,
};

console.log(`2.1: Kaveri's Data: `);
console.log(kaveriData);
console.log('\n');

//adding Kaveri's data
studentMarks.push(kaveriData);
console.log('2.2: Updated Students Data with Kaveri: ');
printStudentsData(studentMarks);
console.log('\n');

//adding totalMarks field
console.log('2.3 Updated Student Data with Total Marks: ');

function calculateTotalMarks(studentMarks) {
  for (let i = 0; i < studentMarks.length; i++) {
    const totalMarks =
      studentMarks[i].hindi +
      studentMarks[i].english +
      studentMarks[i].maths +
      studentMarks[i].computer +
      studentMarks[i].science;

    studentMarks[i].totalMarks = totalMarks;

    console.log(
      `Name: ${studentMarks[i].name}, Roll No: ${studentMarks[i].rollNo}, Total Marks: ${studentMarks[i].totalMarks}`
    );
  }
}

calculateTotalMarks(studentMarks);

console.log('\n');

//adding avgMarks
console.log('2.4: Updated Students Data with Average Marks: ');

function calculateAvg(studentMarks) {
  for (let i = 0; i < studentMarks.length; i++) {
    const noOfSubjects = 5;
    const avgMarks = studentMarks[i].totalMarks / noOfSubjects;

    studentMarks[i].avgMarks = avgMarks;

    console.log(
      `Name: ${studentMarks[i].name},  Roll No: ${studentMarks[i].rollNo}, Average Marks: ${studentMarks[i].avgMarks}`
    );
  }
}

calculateAvg(studentMarks);

console.log('\n');

console.log('Question 3: ');
function calculateGrade(avgMarks) {
  if (avgMarks >= 90 && avgMarks <= 100) {
    return 'A';
  } else if (avgMarks >= 80 && avgMarks <= 89) {
    return 'B';
  } else if (avgMarks >= 70 && avgMarks <= 79) {
    return 'C';
  } else if (avgMarks >= 69 && avgMarks <= 69) {
    return 'D';
  } else if (avgMarks >= 59 && avgMarks <= 59) {
    return 'E';
  } else {
    return 'F';
  }
}

for (let i = 0; i < studentMarks.length; i++) {
  generateReportCard(studentMarks[i]);
}

function generateReportCard(students) {
  console.log(`
  ==== Report Card for ${students.name} ==== 
  Roll No. : ${students.rollNo} 
  ------ 
  Marks 
  ------ 
  Hindi: ${students.hindi} 
  English: ${students.english} 
  Maths: ${students.maths} 
  Computer: ${students.computer} 
  Science: ${students.science} 
  ------ 
  Total: ${students.totalMarks} 
  Average: ${students.avgMarks} 
  Grade: ${calculateGrade(students.avgMarks)} 
  ------ ------ ------ ------ 
  `);
}
