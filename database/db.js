//dbms
const mysql = require('mysql');

//connection
const connection = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'db latihan 13'
})
//export

module.exports = connection;