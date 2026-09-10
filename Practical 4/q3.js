const fileOps = require("./fileOps");

// Copy notes.txt into backup_stream.txt
fileOps.copyFileStream("notes.txt", "backup_stream.txt");