const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(routes.routes)

module.exports = app;
