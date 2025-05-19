const { generateFakeProducts } = require("../lib/helper");

const getProducts = async (req, res, next) => {
  const products = generateFakeProducts(10);
  return res.json(products);
};

module.exports = {
  getProducts,
};
