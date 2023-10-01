const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./comments.db');

db.serialize(() => {
    //CREATE TABLE IF NOT EXISTS comments
});

db.close();