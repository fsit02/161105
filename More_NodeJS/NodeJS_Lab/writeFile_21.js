var fs = require("fs");
console.log("Starting...");
fs.writeFile("./hello.html", 
  "<html><body><h1>Hello!</h1></body></html>",
  function (error) {
	console.log("file has written.");
  }
);
console.log("Done.");
