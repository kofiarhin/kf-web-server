const express = require("express");
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const generateFakePosts = require("./config/fakePosts");
const { getUsers } = require("./controllers/usersController");
const { getProducts } = require("./controllers/productsController");
const { getPosts } = require("./controllers/postsController");
const { getZenQuotes } = require("./controllers/zenController");
const { getLogger } = require("./controllers/loggerController");
const homeController = require("./controllers/homeController");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", homeController);

// Static fake users from config
app.get("/api/users", getUsers);

// Static fake products from config
app.get("/api/products", getProducts);

app.get("/api/fake-posts", getPosts);

// Static fake quotes from config
app.get("/api/zenQuotes", getZenQuotes);

// Get IP address of the client
app.get("/api/logger", getLogger);

module.exports = app;
