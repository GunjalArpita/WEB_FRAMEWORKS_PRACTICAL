const http = require("http");

const server = http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url == "/") {

        res.end("<h1>Welcome to ABC College</h1>");

    }

    else if (req.url == "/about") {

        res.end("<h1>About Our College</h1>");

    }

    else if (req.url == "/courses") {

        res.write("<h2>Courses Offered</h2>");
        res.write("<ul>");
        res.write("<li>M.Sc Computer Science</li>");
        res.write("<li>BCA</li>");
        res.write("<li>B.Sc CS</li>");
        res.write("</ul>");
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