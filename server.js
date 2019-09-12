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

server.get("/api/list/:id", (req, res) => {
  db("recipe_ingredients")
    .where({ recipe_id: req.params.id })
    .then(shoplist => {
      res.status(200).json(shoplist);
    })
    .catch(err => res.send(500));
});

server.get("/api/instruction/:id", (req, res) => {
  db("recipe")
    .where({ id: req.params.id })
    .then(instruction => {
      res.status(200).json(instruction);
    })
    .catch(err => res.send(500));
});

module.exports = server;
