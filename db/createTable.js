const pool = require('./pool');

async function createTable() {
  const client = await pool.connect();
  try {
    // Create the table if it does not exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS tracks (
        trackID SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        artist VARCHAR(255) NOT NULL,
        duration INTERVAL,
        image VARCHAR(255)
      );
    `);
    console.log('Table "tracks" is ready.');
  } catch (err) {
    console.error('Error creating table:', err.stack);
  } finally {
    client.release();
  }
}

// Run the script
createTable();
