const emp = require("./emp");

let basicSalary = 45000;

let hra = emp.calculateHRA(basicSalary);
let da = emp.calculateDA(basicSalary);

let grossSalary = basicSalary + hra + da;

let tax = emp.calculateTax(grossSalary);

let netSalary = emp.calculateNetSalary(basicSalary);

console.log("Basic Salary =", basicSalary);
console.log("HRA =", hra);
console.log("DA =", da);
console.log("Gross Salary =", grossSalary);
console.log("Tax =", tax);
console.log("Net Salary =", netSalary);