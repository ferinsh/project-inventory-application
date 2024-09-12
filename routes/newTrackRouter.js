const {Router} = require("express");
const newTrackController = require("../controllers/newTrackController");

const newTrackRouter = Router();

newTrackRouter.get("/", (req, res) => {
    newTrackController.getNewTrackView(req, res);
})

newTrackRouter.post("/", (req, res) => {
   newTrackController.addTrack(req, res);
})

module.exports = newTrackRouter;