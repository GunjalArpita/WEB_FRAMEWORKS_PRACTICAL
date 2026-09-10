const dirOps = require("./dirOps");

dirOps.createDir("data");
dirOps.createFile("data", "info.txt", "This is info file inside data directory.");
dirOps.readFile("data", "info.txt");