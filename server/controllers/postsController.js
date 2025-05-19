const { generateFakePosts } = require("../lib/helper");

const getPosts = async (req, res, next) => {
  const posts = generateFakePosts(10);

  return res.json(posts);
};

module.exports = {
  getPosts,
};
