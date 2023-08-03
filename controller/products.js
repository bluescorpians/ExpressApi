
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;



exports.createProduct= (req, res) => {
    products.push(req.body);
    res.send(200);
  }
  
  exports.singleProduct=(req, res) => {
    const id = +req.params.id;
    const ind = products.findIndex((p) => p.id === id);
    res.json(products[ind]);
  }
  
  exports.showProducts=(req, res) => {
    res.json(products);
  }
  
  exports.patchProducts=(req, res) => {
    const id = +req.params.id;
    const ind = products.findIndex((p) => p.id === id);
    const temp = products[ind];
    products.splice(ind, 1, { ...temp, ...req.body });
    res.send(200);
  }
  
  exports.updateProducts = (req, res) => {
    const id = +req.params.id;
    const ind = products.findIndex((p) => p.id === id);
    products.splice(ind, 1, { ...req.body, id: id });
    res.send(200);
  }
  
  exports.deleteProducts=(req, res) => {
    const id = +  req.params.id;
    const ind = products.findIndex((p) => p.id === id);
    products.splice(ind, 1);
    res.send(200);
  }
  