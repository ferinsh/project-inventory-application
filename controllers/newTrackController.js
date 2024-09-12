const trackQueries = require("../db/queries");

function getNewTrackView(req, res){
    res.render("newTrackForm.ejs");
}

async function addTrack(req, res){
    const {title, artist, duration, image} = req.body;

    try {
        // Await the query execution to ensure it completes
        console.log(req.body);
        await trackQueries.addTrack({ title, artist, duration: duration, image });
        res.redirect('/'); // Redirect after successful addition
    } catch (err) {
        console.error('Error adding track:', err);
        res.status(500).send('Error adding track.');
    }

}

module.exports = {
    getNewTrackView,
    addTrack
}