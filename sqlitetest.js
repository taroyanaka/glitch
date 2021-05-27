var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');
// var db = new sqlite3.Database('tmp.sqlite3');

// https://support.glitch.com/t/hiding-sqlite-database-from-open-project/4536
var db = new sqlite3.Database('.data/tmp.sqlite3');

db.serialize(function () {
    db.run("CREATE TABLE lorem (info TEXT)");

    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();


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
// serialize();