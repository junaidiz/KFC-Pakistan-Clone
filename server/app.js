var express = require("express");
var PRODUCTS_LIST = require("./products");

var app = express();
app.listen(3005, () => {
  console.log("Server running on port 3005");
});

app.get("/products", (req, res, next) => {
  res.json(PRODUCTS_LIST);
});
