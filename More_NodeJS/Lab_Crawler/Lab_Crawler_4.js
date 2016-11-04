var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");

request({
	url : "http://www.taipower.com.tw/content/news/news02.aspx",
	method : "GET"
}, function(err, r, body) {
	var result = [];
	if (err || !body) {
		return;
	}
	var $ = cheerio.load(body);
	var titles = $("#news_box > div.box_list > ul > li > a > h3");
	for (var i = 0; i < titles.length; i++) {
		result.push($(titles[i]).text());
	}
	fs.writeFileSync("test.txt", JSON.stringify(result));
});
