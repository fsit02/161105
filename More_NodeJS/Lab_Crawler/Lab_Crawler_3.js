var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");

request({
	url : "http://www.taipower.com.tw/content/news/news02.aspx",
	method : "GET"
}, function(err, r, body) {
	if (err || !body) {
		return;
	}
	fs.writeFileSync("test.txt", body);
});

