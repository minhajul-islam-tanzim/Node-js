const mysql = require("mysql2");

const pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "#253545#T@N#",
    database: "airbnb"
})
module.exports = pool.promise();