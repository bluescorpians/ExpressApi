const http = require("http");
const express = require("express");
const love = require("./controller/products");
const exp = require("constants");

const server = express();
server.use(express.json());

const nodeapi = express.Router();
server.use('/api',nodeapi);


nodeapi
  .post("/products", love.createProduct)
  .get("/products", love.showProducts)
  .get("/products/:id", love.singleProduct)
  .put("/products/:id", love.updateProducts)
  .patch("/products/:id", love.patchProducts)
  .delete("/products/:id", love.deleteProducts);

server.get("/", (req, res) => {
  res.send("200");
});

// delete

server.listen(8080);
