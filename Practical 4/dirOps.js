const fs = require("fs");

function createDir(name) {
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
    console.log(`Directory '${name}' created.`);
  }
}

function createFile(dir, file, content) {
  fs.writeFileSync(`${dir}/${file}`, content);
  console.log(`File '${file}' created in '${dir}'.`);
}

function readFile(dir, file) {
  const data = fs.readFileSync(`${dir}/${file}`, "utf8");
  console.log("File Content:\n", data);
}

module.exports = { createDir, createFile, readFile };