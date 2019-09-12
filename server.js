const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("API up");
});

server.get("/api/recipe", (req, res) => {
  db("recipe").then(recipes => res.status(200).json(recipes));
});

module.exports = server;
