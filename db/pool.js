const {Pool} = require("pg");
require('dotenv').config()

module.exports = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'music_inventory',
    password: process.env.DB_PASS,
    port: 5432,
})