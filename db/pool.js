const { Pool } = require("pg");
require('dotenv').config();

// Construct the connection string
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// Log the connection string for debugging (remove or comment this out in production)
console.log(`Connecting to database with: ${connectionString}`);

// Create a new Pool instance with the connection string
module.exports = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false // Change to true if you have a valid SSL certificate
    },
    max: 20, // Max number of connections in the pool
    idleTimeoutMillis: 30000, // Idle timeout in milliseconds
    connectionTimeoutMillis: 2000 // Connection timeout in milliseconds
});
