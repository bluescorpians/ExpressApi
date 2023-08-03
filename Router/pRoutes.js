const express=require('express');
const love = require("../controller/products");
const productAPI = express.Router();



productAPI
  .post("/products", love.createProduct)
  .get("/products", love.showProducts)
  .get("/products/:id", love.singleProduct)
  .put("/products/:id", love.updateProducts)
  .patch("/products/:id", love.patchProducts)
  .delete("/products/:id", love.deleteProducts);

  exports.landkk=productAPI;