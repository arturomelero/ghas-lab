const express = require("express");
const _ = require("lodash");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const message = _.capitalize("ghas dependency graph lab");
  res.send(message);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
