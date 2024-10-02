// An array of the students marks. Filter out the marks of students that scored 90+ .
let marks = [
  {
    name: "Ali",
    marks: 90,
  },
  {
    name: "Ahmad",
    marks: 99,
  },
  {
    name: "Sufiyan",
    marks: 60,
  },
  {
    name: "Zain",
    marks: 87,
  },
];
let toppers = marks.filter((val) => {
  return val.marks >= 90;
});
console.log(toppers);
toppers.forEach((value) => {
  console.log(`${value.name} scored ${value.marks} in the English Exam.`);
});
