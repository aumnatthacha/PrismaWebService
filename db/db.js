const mysql = require('mysql');
const dbConfig = require('../config/db');

// export const connectMysql = mysql.connect(dbConfig);

module.exports = connectMysql = mysql.createConnection(dbConfig);
