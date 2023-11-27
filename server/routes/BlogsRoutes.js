const express = require("express");
const router = express.Router();
const Blog = require("../models/BlogModel");
router.get("/", async (req, res) => {
  const c = await Blog.find();
  res.json(c);
});

router.post("/create", async (req, res) => {
  const newBlog = Blog(req.body._value);
  await newBlog.save();
  res.json(newBlog);
});

router.get("/get-one/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

module.exports = router;
