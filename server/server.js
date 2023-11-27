const express = require("express");
const BlogsRoutes = require("./routes/BlogsRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/blogs", BlogsRoutes);
app.listen(3000);
