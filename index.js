// https://qiita.com/yonedaco/items/569bcc442872a1f9a03d
// https://stackoverflow.com/a/38407214
// https://stackoverflow.com/a/46668737
// https://stackoverflow.com/a/11944984

// https://github.com/fraigo/node-express-rest-api-example/blob/master/server.js
// https://expressjs.com/en/api.html#req.query

const express = require('express');
var app = express()
const https = require('https');
const fs = require('fs');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('tmp.sqlite3');


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


// domainURL/test&id=42

app.get("/test", (req, res, next) => {
    const id = req.query.id;
    // https://qiita.com/kojiro_ueda/items/de9402027e0b8e83569e
    async function serialize() {
        new Promise(resolve => {
            db.serialize(() => {
                db.run(`INSERT INTO lorem (info) values('foobar-${id}-1');`);
                db.run(`INSERT INTO lorem (info) values('foobar-${id}-2');`);
                db.run(`INSERT INTO lorem (info) values('foobar-${id}-3');`);

                db.run(`INSERT INTO lorem (info) values('foobar-${id}-4');`, () => resolve());
            });
        });
    }
    serialize();
    res.json({
        "message": "success"
        ,
        "data": req.query.id
    })
}).listen(3000);







// https://utano.jp/entry/2017/10/mysql57-mysql-secure-installation/






// app.get('/', function (req, res) {
//     const file = `${__dirname}/test.mp4`;
//     res.download(file);
// }).listen(3000);



