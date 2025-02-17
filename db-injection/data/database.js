const mysql = require('mysql2/promise');
const db_password=require('../secret/db-password')
const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: db_password,
  multipleStatements: true
})

module.exports = pool;