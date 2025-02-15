// Sample data
const { users } = require("../utils/constants");

const getAllUsers = () => {
  return users;
};

const getUser = (userId) => {
  return users.find((user) => user.id === userId);
};

module.exports = {
  getAllUsers,
  getUser,
};
