var fs = require("fs");
console.log("Starting...");
var data = fs.readFileSync("config.json");
console.log("file content: " + data);
var config = JSON.parse(data);
console.log("Port: " + config.port);
console.log("Done.");

