var mysql = require('mysql');

if(process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password: 'yourRootPassword',
        database: 'burger_db'
    });
}


connection.connect(function (err,data) {
    if(err) throw err;

    console.log('Connected as id ' + connection.threadId );
  });

module.exports = connection;

