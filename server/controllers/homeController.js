const homeController = async (req, res) => {
  res.json({ message: "Welcome to my simple api" });
};

module.exports = homeController;
