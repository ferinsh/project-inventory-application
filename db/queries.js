const pool = require('./pool');

// Function to insert a new track
async function addTrack({ title, artist, duration, image }) {
    const query = `
        INSERT INTO tracks (title, artist, duration, image)
        VALUES ($1, $2, $3, $4);
    `;
    try {
        await pool.query(query, [title, artist, duration, image]);
    } catch (err) {
        console.error('Error executing query:', err);
        throw err; // Rethrow to handle it in the controller
    }
}

// Function to get all rows from table tracks 
async function getAllTracks() {
    const query = `
        SELECT * FROM tracks;
    `;
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
}

async function searchTrackByTitle(title) {
    const query = `SELECT * FROM tracks WHERE title ILIKE $1`;
    try {
        const result = await pool.query(query, [`%${title}%`]);
        return result.rows;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
}

module.exports = {
    addTrack,
    getAllTracks,
    searchTrackByTitle
};