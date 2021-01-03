const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Wild*Bastien*Prt1',
  database : 'odysseyhomer'

});

module.exports  =  connection;