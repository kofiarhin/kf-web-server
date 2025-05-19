const images = require("../config/images");

const getImages = async (req, res, next) => {
  return res.json(images);
};

module.exports = {
  getImages,
};
