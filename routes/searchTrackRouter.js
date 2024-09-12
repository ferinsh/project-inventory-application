const {Router} = require("express");

const searchTitleController = require("../controllers/searchTitleController")

const searchTrackRouter = Router();

searchTrackRouter.get("/", (req, res) => {
    res.render("index.ejs", {
        show: "specificTrackForm"
    })
})

searchTrackRouter.post("/", (req, res) => {
    // const title = req.body.title;
    // console.log(title);
    
    // res.redirect("/");
    searchTitleController.searchByTitle(req, res);
    
})

module.exports = searchTrackRouter