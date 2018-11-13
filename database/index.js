const mysql = require('mysql2');
const { sequelize } = require('./database');

//Entities
const User = require('./User');

module.exports = {

  connect: async () => {

    // let mysqlConn = mysql.createConnection({
    //   host: 'localhost',
    //   user: 'root',
    //   password: 'root'
    // });
    // await mysqlConn.connect((err) => {
    //   mysqlConn.query('create database mydb', (err) => console.log(err));
    //   return true
    // });
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

  },
  user: User

}

