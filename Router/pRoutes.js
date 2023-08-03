const express=require('express');
const love = require("../controller/products");
const productAPI = express.Router();



productAPI
  .post("/", love.createProduct)
  .get("/", love.showProducts)
  .get("/:id", love.singleProduct)
  .put("/:id", love.updateProducts)
  .patch("/:id", love.patchProducts)
  .delete("/:id", love.deleteProducts);

  exports.landkk=productAPI;