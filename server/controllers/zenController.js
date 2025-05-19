const zenQuotes = require("../config/zenQuotes");

const getZenQuotes = async (req, res, next) => {
  return res.json(zenQuotes);
};

module.exports = {
  getZenQuotes,
};
