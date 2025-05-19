const products = require("../config/products");

const getProducts = async (req, res, next) => {
  return res.json(products);
};

module.exports = {
  getProducts,
};
