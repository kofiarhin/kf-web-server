const express = require("express");

const app = express();
const cors = require("cors");

// setup middlewares
app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  return res.json({ message: "hello world " });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started on port ", port));
