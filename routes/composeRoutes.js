const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.get("/compose", function (req, res) {
  res.render("compose");
});

router.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });

  post.save(function (err) {
    if (!err) {
      res.redirect("/");
    }
  });
});


module.exports = router;
