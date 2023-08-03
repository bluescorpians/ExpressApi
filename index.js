const http = require("http");
const express = require("express");
const pRoutes = require("./Router/pRoutes");
const uRoutes = require("./Router/uRoutes");

const server = express();

server.use("/products", pRoutes.landkk);
server.use("/user", uRoutes.userAPI);

server.get("/", (req, res) => {
  res.send("200");
});

server.listen(8080, () => {
  console.log("server started");
});
