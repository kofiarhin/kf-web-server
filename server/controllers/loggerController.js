const getLogger = async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  if (ip.includes(",")) {
    ip = ip.split(",")[0].trim();
  }
  res.json({ ip });
};
module.exports = {
  getLogger,
};
