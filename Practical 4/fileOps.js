const fs = require("fs");

function copyFileStream(src, dest) {
  const readStream = fs.createReadStream(src);   // stream to read
  const writeStream = fs.createWriteStream(dest); // stream to write

  // Pipe automatically reads from src and writes to dest
  readStream.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Copied from ${src} to ${dest} using streams!`);
  });
}

module.exports = { copyFileStream };