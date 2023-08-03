const http = require("http");
const express = require("express");
const pRoutes = require("./Router/pRoutes");
const server = express();



server.use("/", pRoutes.landkk);






server.get("/", (req, res) => {
  res.send("200");
});

server.listen(8080, () => {
  console.log("server started");
});
