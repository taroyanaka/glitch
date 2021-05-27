// const https = require('https');
// const fs = require('fs');
// https://stackoverflow.com/a/38407214


const express = require('express');
var app = express()


// https://qiita.com/yonedaco/items/569bcc442872a1f9a03d


// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World\n');
// }).listen(3000);

// console.log('Server running at http://127.0.0.1:3000');







// https://stackoverflow.com/a/46668737
// https://stackoverflow.com/a/11944984

// var url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=tr-TR&client=tw-ob&q=Bats%C4%B1n+bu+d%C3%BCnya+bitsin+bu+r%C3%BCya"



// const https = require('https');
// const fs = require('fs');

// const file = fs.createWriteStream("file.mp3");
// const request = https.get(url, function (response) {
//     response.pipe(file);
// });







// app.get('/', function (req, res) {
//     const file = `${__dirname}/test.mp4`;
//     res.download(file); // Set disposition and send it.
// });



// app.get('/', function (req, res) {
//     res.send('hello world')
// })

const URL = `https://cdn.glitch.com/6a17e047-77f1-4d9b-b646-2e1a7c77fdee%2Ftest.mp4?v=1622090667091`;

app.get('/', function (req, res) {
    http.get(URL, function (file) {
        file.pipe(res);
    });
});

app.listen(3000)