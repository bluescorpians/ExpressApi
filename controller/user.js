
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const user = data.users;



exports.createProduct= (req, res) => {
    user.push(req.body);
    res.send(200);
  }
  
  exports.singleProduct=(req, res) => {
    const id = +req.params.id;
    const ind = user.findIndex((p) => p.id === id);
    res.json(user[ind]);
  }
  
  exports.showProducts=(req, res) => {
    res.json(user);
  }
  
  exports.patchProducts=(req, res) => {
    const id = +req.params.id;
    const ind = user.findIndex((p) => p.id === id);
    const temp = user[ind];
    user.splice(ind, 1, { ...temp, ...req.body });
    res.send(200);
  }
  
  exports.updateProducts = (req, res) => {
    const id = +req.params.id;
    const ind = user.findIndex((p) => p.id === id);
    user.splice(ind, 1, { ...req.body, id: id });
    res.send(200);
  }
  
  exports.deleteProducts=(req, res) => {
    const id = +  req.params.id;
    const ind = user.findIndex((p) => p.id === id);
    user.splice(ind, 1);
    res.send(200);
  }
  