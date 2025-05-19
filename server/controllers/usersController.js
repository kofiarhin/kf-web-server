const { generateFakeUsers } = require("../lib/helper");

const getUsers = async (req, res, next) => {
  const users = generateFakeUsers();
  return res.json(users);
};

module.exports = {
  getUsers,
};
