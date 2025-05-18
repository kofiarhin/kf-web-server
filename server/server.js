const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const generateFakePosts   = require("./config/fakePosts");
const users = require("./config/users");
const products = require("./config/products");
const zenQuotes = require("./config/zenQuotes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
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

// Dynamic fake data (fresh on each request)
app.get("/api/fake-data", (req, res) => {
  const count = parseInt(req.query.count) || 5;

  const data = Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    job: faker.person.jobTitle(),
    company: faker.company.name(),
    avatar: faker.image.avatar(),
  }));

  res.json(app.get("/api/fake-posts", (req, res) => {
  const count = parseInt(req.query.count) || 5;
  const data = generateFakePosts(count);
  res.json(data);
});




// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});