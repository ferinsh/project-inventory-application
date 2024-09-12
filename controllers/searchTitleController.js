const trackQueries = require("../db/queries");


async function searchByTitle(req, res){
    const title = req.body.title;
    console.log(title);

    try{
        const tracks = await trackQueries.searchTrackByTitle(title);
        console.log(tracks);
        res.render("index.ejs", {
            show: "alltracks",
            tracks: tracks
        })
    }catch(err){
        console.error(err);
        throw err;
    }

}

module.exports = {
    searchByTitle
}