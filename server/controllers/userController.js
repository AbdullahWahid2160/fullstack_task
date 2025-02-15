const { getAllUsers, getUser } = require("../services/userService");

const getUsers = (req, res) => {
  const users = getAllUsers();
  res.json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = getUser(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

module.exports = {
  getUsers,
  getUserById,
};
