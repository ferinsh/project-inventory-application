const { addTrack } = require('../db/queries');

function getNewTrackView(req, res) {
    res.render("newTrackForm.ejs");
}

async function addTrack(req, res) {
    const { title, artist, duration, image } = req.body;

    try {
        await addTrack({ title, artist, duration, image });
        res.redirect('/');
    } catch (err) {
        console.error('Error adding track:', err);
        res.status(500).send('Error adding track.');
    }
}

module.exports = { getNewTrackView, addTrack };
