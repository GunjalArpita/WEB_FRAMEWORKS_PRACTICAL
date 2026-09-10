const fs = require("fs");

// Create a file
fs.writeFileSync("temp.txt", "Temporary file content.");

// Rename it
fs.renameSync("temp.txt", "permanent.txt");
console.log("File renamed to permanent.txt");

// Delete it
fs.unlinkSync("backup_stream.txt");
console.log("File deleted successfully!");
