const EventEmitter = require("events");

class Download extends EventEmitter {
    startDownload(file) {
        console.log("Downloading " + file + "...");

        setTimeout(() => {
            this.emit("complete", "Download of " + file + " finished!");
        }, 2000);
    }
}

const download = new Download();

download.on("complete", (message) => {
    console.log(message);
});

download.startDownload("coding.pdf");