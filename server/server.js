const app = require("./app");

const port = process.env.PORT || 5000;
// Start serverconst
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
