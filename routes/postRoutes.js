const express = require("express");
const router = express.Router();

// Importing the mongoose model
const Post = require("../models/Post");

// Route for individual posts
router.get("/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne({ _id: requestedPostId }, function (err, post) {
    res.render("post", {
      title: post.title,
      content: post.content,
    });
  });
});

module.exports = router;
