const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');

// * require database configration
require("./config/index");

const indexRouter = require("./routes");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/build")));

app.use("/apis", indexRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/public/index.html')));

module.exports = app;
