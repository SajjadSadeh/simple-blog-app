const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  text: String,
});

module.exports = mongoose.model("blog", blogSchema);
