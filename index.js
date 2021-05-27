// https://qiita.com/yonedaco/items/569bcc442872a1f9a03d
// https://stackoverflow.com/a/38407214
// https://stackoverflow.com/a/46668737
// https://stackoverflow.com/a/11944984

const express = require('express');
var app = express()
const https = require('https');
const fs = require('fs');

// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end('Hello World\n');
// }).listen(3000);
// console.log('Server running at http://127.0.0.1:3000');

let URL = `https://cdn.glitch.com/6a17e047-77f1-4d9b-b646-2e1a7c77fdee%2Ftest.mp4?v=1622090667091`;
// URL = "https://translate.google.com/translate_tts?ie=UTF-8&tl=tr-TR&client=tw-ob&q=Bats%C4%B1n+bu+d%C3%BCnya+bitsin+bu+r%C3%BCya";


app.get('/', function (req, res) {
    https.get(URL, function (file) {
        file.pipe(res);
    });
}).listen(3000);






// https://utano.jp/entry/2017/10/mysql57-mysql-secure-installation/





CREATE TABLE table_name(
    column_1 INT PRIMARY KEY,
)






// app.get('/', function (req, res) {
//     const file = `${__dirname}/test.mp4`;
//     res.download(file);
// }).listen(3000);



