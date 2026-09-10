const http = require("http");

const server = http.createServer(function (req, res) {

    if (req.url == "/") {

        let today = new Date();

        let date = today.getDate() + "/" +
            (today.getMonth() + 1) + "/" +
            today.getFullYear();

        let time = today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

        let day = days[today.getDay()];

        let greeting;

        if (today.getHours() < 12)
            greeting = "Good Morning";
        else if (today.getHours() < 17)
            greeting = "Good Afternoon";
        else
            greeting = "Good Evening";

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write("<h2>Date & Greeting Server</h2>");
        res.write("<hr>");
        res.write("<b>Date:</b> " + date + "<br>");
        res.write("<b>Time:</b> " + time + "<br>");
        res.write("<b>Day:</b> " + day + "<br>");
        res.write("<b>Greeting:</b> " + greeting);

        res.end();

    }

    else {

        res.writeHead(404, { "Content-Type": "text/html" });

        res.end("<h2>404 - Page Not Found</h2>");

    }

});

server.listen(3000, function () {

    console.log("Server running at http://localhost:3000");

});