const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const users = require("./config/users");
const products = require("./config/products");
const zenQuotes = require("./config/zenQuotes");
const generateFakePosts = require("./config/fakePosts");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my simple api" });
});

// Static fake users from config
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Static fake products from config
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Static fake quotes from config
app.get("/api/zenQuotes", (req, res) => {
  res.json(zenQuotes);
});

// Get IP address of the client
app.get("/api/logger", (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  if (ip.includes(",")) {
    ip = ip.split(",")[0].trim();
  }
  res.json({ ip });
});

app.get("/api/fake-posts", async (req, res) => {
  const data = generateFakePosts(10);

  return res.json(data);
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
