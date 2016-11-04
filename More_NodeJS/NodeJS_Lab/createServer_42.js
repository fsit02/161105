console.log("Starting...");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var express = require("express");

var app = express();

app.get("/", function (request, response) {
	response.send("hello!");
});

app.listen(port, host);
