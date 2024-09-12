const { Router } = require("express");
const searchTitleController = require("../controllers/searchTitleController");

const searchTrackRouter = Router();

searchTrackRouter.get("/", (req, res) => {
    res.render("index.ejs", {
        show: "specificTrackForm"
    });
});

searchTrackRouter.post("/", (req, res) => {
    searchTitleController.searchByTitle(req, res);
});

module.exports = searchTrackRouter;