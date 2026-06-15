const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    database: 'streaming_users'
})
connection.connect(err => {
    if(!err){
        console.log("Successful connection")
    }
})

module.exports = connection;