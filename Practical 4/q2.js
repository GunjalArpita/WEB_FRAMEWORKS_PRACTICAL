// q2.js
const fs = require("fs");

// Append data to notes.txt
fs.appendFileSync("notes.txt", "Line 1\n");
fs.appendFileSync("notes.txt", "Line 2\n");
fs.appendFileSync("notes.txt", "Line 3\n");

// Read and print content
const data = fs.readFileSync("notes.txt", "utf8");
console.log("File Content:\n", data);