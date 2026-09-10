const http = require("http");

const server = http.createServer(function (req, res) {

    if (req.url == "/") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write("<h2>Student Information</h2>");
        res.write("<hr>");
        res.write("<b>Name:</b> Rahul Sharma<br>");
        res.write("<b>Roll No:</b> 101<br>");
        res.write("<b>Course:</b> M.Sc. Computer Science<br>");
        res.write("<b>College:</b> ABC College<br>");

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