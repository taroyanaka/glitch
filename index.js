// https://qiita.com/yonedaco/items/569bcc442872a1f9a03d


// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World\n');
// }).listen(3000);

// console.log('Server running at http://127.0.0.1:3000');







// https://stackoverflow.com/a/46668737
// https://stackoverflow.com/a/11944984

var url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=tr-TR&client=tw-ob&q=Bats%C4%B1n+bu+d%C3%BCnya+bitsin+bu+r%C3%BCya"



const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("file.mp3");
const request = https.get(url, function (response) {
    response.pipe(file);
});