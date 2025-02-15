const posts = require("../utils/constants");

const getPostsByUser = (userId) => {
  return posts.filter((post) => post.userId === userId);
};

const addPost = (userId, postId, title, body) => {
  const newPost = { id: postId, userId, title, body };
  posts.push(newPost);
  return newPost;
};

module.exports = {
  getPostsByUser,
  addPost,
};
