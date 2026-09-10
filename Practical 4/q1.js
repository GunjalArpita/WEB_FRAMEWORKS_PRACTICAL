// q1_create_read.js
const fs = require("fs");

// Create a file and write content
fs.writeFileSync("intro.txt", "Welcome to Node.js File System!");

// Read the file content
fs.readFile("intro.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }

  console.log("Data: " + data.toString());
});