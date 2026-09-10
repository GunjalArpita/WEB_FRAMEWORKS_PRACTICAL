const student = require("./student");

let marks = [80, 75, 90, 85, 70];

let percentage = student.calculatePercentage(marks);

console.log("Percentage =", percentage);
console.log("Grade =", student.calculateGrade(percentage));
console.log("Pass =", student.isPass(percentage));