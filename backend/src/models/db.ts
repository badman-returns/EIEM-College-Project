import * as mysql from "mysql";
const dotenv = require('dotenv');
dotenv.config();

const Connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
});

export default Connection;