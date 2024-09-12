const { searchTrackByTitle } = require('../db/queries');

async function searchByTitle(req, res) {
    const title = req.body.title;

    try {
        const tracks = await searchTrackByTitle(title);
        res.render("index.ejs", {
            show: "alltracks",
            tracks: tracks
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { searchByTitle };
