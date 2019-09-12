const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DATABASE || 'music'
});
connection.connect((err) => {
    if (err) {
        console.log(err)
        throw err;
    }
    console.log('successful')
});

module.exports = connection;

