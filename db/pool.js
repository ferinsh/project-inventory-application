const {Pool} = require("pg");
require('dotenv').config()

// module.exports = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASS,
//     port: process.env.DB_PORT,
//     ssl: {
//         rejectUnauthorized: false // Change to true if you have a valid SSL certificate
//     },
//     max: 20, // Max number of connections in the pool
//     idleTimeoutMillis: 30000, // Idle timeout in milliseconds
//     connectionTimeoutMillis: 2000 // Connection timeout in milliseconds
// });

// module.exports = new Pool({
//     // connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
//     connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@dpg-${process.env.DB_HOST}/${process.env.DB_DATABSE}`
//   });

module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
    ssl: {
        rejectUnauthorized: false // Change to true if you have a valid SSL certificate
    },
    max: 20, // Max number of connections in the pool
    idleTimeoutMillis: 30000, // Idle timeout in milliseconds
    connectionTimeoutMillis: 2000 // Connection timeout in milliseconds
});