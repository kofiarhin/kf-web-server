const users = require("../config/users");

const getUsers = async (req, res, next) => {
  return res.json(users);
};

module.exports = {
  getUsers,
};
