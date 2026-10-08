const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service.js");
const postModel = require("./models/post.model.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// Endpoint to create a new post with an image upload
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
});

// Endpoint to get all posts
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  res.status(200).json({
    message: "Posts retrieved successfully",
    posts: posts,
  });
});

module.exports = app;
