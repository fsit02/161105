console.log("Starting...");
var fs = require("fs");
var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended : true
}));

var multer = require('multer');
var upload = multer({
	dest : 'uploads/'
});

app.get("/", function(request, response) {
	response.send("Hello!");
});

app.get("/hello/:text", function(request, response) {
	// 模擬程式三秒鐘延遲
	// var stop = new Date().getTime();
	// while(new Date().getTime() < stop + 3000) {
	// ;
	// }

	response.send("Hello! " + request.params.text);
});

app.post("/test", function(request, response) {
	var firstName = request.body.firstName;
	var lastName = request.body.lastName;
	response.send(firstName + " " + lastName);
});



// 步驟三的程式碼:
app.post('/admin/inbox', multer({dest : './uploads/'}).single('fileData'), 
function(request, response) {
	//console.log(request.body.txtNote);
	//console.log(JSON.stringify(request.file));
	fs.rename(request.file.path, request.file.destination
			+ request.file.originalname);
	response.send("file uploaded");
});



app.listen(process.env.PORT, process.env.IP);
// app.listen("8080", "127.0.0.1");
