const express=require('express');
const love = require("../controller/user");
const userAPI = express.Router();



userAPI
  .post("/", love.createProduct)
  .get("/", love.showProducts)
  .get("/:id", love.singleProduct)
  .put("/:id", love.updateProducts)
  .patch("/:id", love.patchProducts)
  .delete("/:id", love.deleteProducts);

  exports.userAPI=userAPI;