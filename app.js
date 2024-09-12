const express = require("express");
const path = require("path");
const newTrackRouter = require("./routes/newTrackRouter");
const searchTrackRouter = require("./routes/searchTrackRouter");
require('dotenv').config();

//Controller for rendering index page
const indexController = require("./controllers/indexController")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    indexController.showIndex(req, res);
})

app.use("/newtrack", newTrackRouter);
app.use("/searchtrack", searchTrackRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));