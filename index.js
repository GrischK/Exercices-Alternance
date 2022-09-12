const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  console.log("test");
  res.send("hello")
});

app.listen(3000, () => {
  console.log("salut");
});