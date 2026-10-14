const express = require("express");
const todoRouter = express.Router();
const {createTodo} = require("../controllers/todoController")

// todoRouter.get("/")
todoRouter.post("/", createTodo)


module.exports = todoRouter;