const express = require("express");
const todoRouter = express.Router();
const {createTodo, getTodo,  deleteTodo,  complatedTask} = require("../controllers/todoController")

todoRouter.post("/", createTodo)
todoRouter.get("/", getTodo)
todoRouter.delete("/:id", deleteTodo)
todoRouter.delete("/:id", complatedTask)



module.exports = todoRouter;