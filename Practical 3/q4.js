const http = require("http");

const server = http.createServer(function (req, res) {

    // Display request details in terminal
    console.log("Request Method: " + req.method);
    console.log("Requested URL : " + req.url);
    console.log("--------------------------------");

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == "/") {

        res.end("<h1>Welcome to XYZ Company</h1>");

    }

    else if (req.url == "/about") {

        res.end("<h1>About Us</h1>");

    }

    else if (req.url == "/services") {

        res.write("<h2>Our Services</h2>");
        res.write("<ul>");
        res.write("<li>Software Development</li>");
        res.write("<li>Web Design</li>");
        res.write("<li>Cloud Solutions</li>");
        res.write("</ul>");
        res.end();

    }

    else if (req.url == "/contact") {

        res.write("<h2>Contact Us</h2>");
        res.write("Email : info@xyzcompany.com<br>");
        res.write("Phone : +91 9876543210");
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