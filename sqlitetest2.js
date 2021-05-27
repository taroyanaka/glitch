var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('tmp.sqlite3');
var db = new sqlite3.Database('.data/tmp.sqlite3');


// https://qiita.com/kojiro_ueda/items/de9402027e0b8e83569e
async function serialize() {
    new Promise(resolve => {
        db.serialize(() => {
            db.run("INSERT INTO lorem (info) values('foobar1');");
            db.run("INSERT INTO lorem (info) values('foobar2');");
            db.run("INSERT INTO lorem (info) values('foobar3');");

            db.run("INSERT INTO lorem (info) values('foobar4');", () => resolve());
        });
    });
}
serialize();