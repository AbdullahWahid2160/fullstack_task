const { getPostsByUser, addPost } = require("../services/postService");

const getPostsByUserId = (req, res) => {
  const userId = parseInt(req.params.userId);
  const userPosts = getPostsByUser(userId);
  return res.json(userPosts);
};

const createPost = (req, res) => {
  const userId = parseInt(req.params.userId);
  const postId = parseInt(req.params.postId);
  const { title, body } = req.body;

  const newPost = addPost(userId, postId, title, body);
  res.json(newPost);
};

module.exports = {
  getPostsByUserId,
  createPost,
};
