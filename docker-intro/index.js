const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi Docker Rocketseat!!!");
});

app.listen(3000);