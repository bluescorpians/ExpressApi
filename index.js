const http = require("http");
const express = require("express");
const fs = require("fs");
const server = express();

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

// create API


server.get("/products", (req, res) => {
  res.json(products);
});



server.get("/", (req, res) => {
  res.send("200");
});

server.listen(8080);
