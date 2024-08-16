console.log('Program 1: ');
const calculateAverage = (numbersArray) => {
  let total = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    total = total + numbersArray[i];
  }
  return total / numbersArray.length;
};
console.log(calculateAverage([5, 10, 15]));
console.log('\n');

console.log('Program 2: ');
const reverseString = (str) => {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }
  return reversedString;
};
console.log(reverseString('world'));
console.log('\n');

console.log('Program 3: ');
const findLongestWord = (words) => {
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord(['apple', 'banana', 'grapefruit']));
console.log('\n');

console.log('Program 4: ');
const calculateStringLength = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // count = count + str[i].length
    // console.log(str[i], count)
    count++;
  }
  return count;
};
console.log(calculateStringLength('hello'));
console.log('\n');

console.log('Program 5: ');
const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 92 },
  { name: 'Charlie', age: 19, grade: 88 },
];
const noOfStudents = students.length;
console.log('5.1');
const calculateAverageGrade = (students) => {
  let totalGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrade = totalGrade + students[i].grade;
  }
  return (totalGrade / noOfStudents).toFixed();
};
console.log('Average Grade: ', calculateAverageGrade(students));
console.log('\n');

console.log('5.2');
const getNames = (students) => {
  const namesArr = [];
  for (let i = 0; i < students.length; i++) {
    namesArr.push(students[i].name);
  }
  return namesArr;
};
console.log('Names of students: ', getNames(students));
console.log('\n');

console.log('5.3');
const calculateAverageAge = (students) => {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge = totalAge + students[i].age;
  }
  return (totalAge / noOfStudents).toFixed();
};
console.log('Average Age: ', calculateAverageAge(students));
console.log('\n');

console.log('5.4');
const highGrades = (students) => {
  let highGradeStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 90) {
      highGradeStudents.push(students[i]);
    }
  }
  return highGradeStudents;
};
console.log(
  'Students with a grade greater than or equal to 90 : ',
  highGrades(students)
);
console.log('\n');

console.log('5.5');
const isAnyBelow18 = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
      return true;
    }
  }
  return false;
};
console.log('Is any student below the age of 18: ', isAnyBelow18(students));
console.log('\n');

console.log('5.6');
const findStudentsByName = (students, name) => {
  // let studentObj = []
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      // studentObj = students[i]
      // return studentObj
      return students[i];
    }
  }
  return 'Student not found.';
};
console.log(findStudentsByName(students, 'Charlie'));
console.log('\n');

console.log('5.7');
const getHighScoreStudents = (students) => {
  const highScorer = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 85) {
      highScorer.push(students[i].name);
    }
  }
  return highScorer;
};
console.log(
  'Students who have scored grade above 85: ',
  getHighScoreStudents(students)
);
console.log('\n');
