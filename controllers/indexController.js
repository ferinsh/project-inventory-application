const {getAllTracks} = require("../db/queries")

function formatDuration(duration) {
    const hours = duration.hours || 0;
    const minutes = duration.minutes || 0;
    const seconds = duration.seconds || 0;
    return `${hours}h ${minutes}m ${seconds}s`;
}


async function showIndex(req, res){
    

    try {
        const tracks = await getAllTracks();
        // console.log(tracks);
        const formattedTracks = tracks.map(track => ({
            ...track,
            duration: formatDuration(track.duration)
        }));
        res.render("index.ejs", {
            show: "alltracks",
            tracks: formattedTracks
        });
    } catch(err) {
        console.error(err)
    }


}

module.exports = {
    showIndex
}