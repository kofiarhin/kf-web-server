const express = require("express");
const cors = require("cors");

const users = require("./config/users");
const products = require("./config/products");
const zenQuotes = require("./config/zenQuotes");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/zenQuotes", (req, res) => {
  res.json(zenQuotes);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});