const http = require("http");
const express = require("express");
const fs = require("fs");
const server = express();

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

server.use(express.json());

// create API

server.post("/products", (req, res) => {
  products.push(req.body);
  res.send(200);
});

// read API
server.get("/products", (req, res) => {
  res.json(products);
});

// get particular product with id

server.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const ind = products.findIndex((p) => p.id === id);
  res.json(products[ind]);
});

// update API

server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const ind = products.findIndex((p) => p.id === id);
  products.splice(ind, 1, { ...req.body, id: id });
  res.send(200);
});

// patch API

server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const ind = products.findIndex((p) => p.id === id);
  const temp = products[ind];
  products.splice(ind, 1, { ...temp, ...req.body });
  res.send(200);
});
server.get("/", (req, res) => {
  res.send("200");
});

// delete

server.delete("/products/:id", (req, res) => {
  const id = +  req.params.id;
  const ind = products.findIndex((p) => p.id === id);
  products.splice(ind, 1);
  res.send(200);
});
server.listen(8080);
