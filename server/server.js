const express = require("express");

const app = express();
const cors = require("cors");
const { users } = require("./config/data");

// setup middlewares
app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  return res.json({ message: "hello world " });
});

app.get("/api/users", async (req, res, next) => {
  return res.json(users);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started on port ", port));
