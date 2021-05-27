// https://github.com/fraigo/node-express-rest-api-example/blob/master/server.js
// https://expressjs.com/en/api.html#req.query

var express = require("express");
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tmp.sqlite3');


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





