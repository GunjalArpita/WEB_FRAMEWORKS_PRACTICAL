let dob = new Date("2014-04-21");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
let m = today.getMonth() - dob.getMonth();

if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
  age--;
}

console.log("Age:", age);
console.log(age >= 18 ? "Eligible" : "Not Eligible");