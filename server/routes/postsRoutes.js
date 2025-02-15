const express = require("express");
const {
  getPostsByUserId,
  createPost,
} = require("../controllers/postController");

const router = express.Router();

// Post routes
router.get("/users/:userId/posts", getPostsByUserId);
router.post("/users/:userId/post/:postId", createPost);

module.exports = router;
