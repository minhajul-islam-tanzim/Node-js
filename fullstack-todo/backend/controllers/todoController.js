const Todo = require("../model/todoModel");

exports.createTodo = async (req, res, next) => {
  try {
    const { text, date } = req.body;
    const todoItem = new Todo({ text, date });
    await todoItem.save();
    res.status(201).json(todoItem);
  } catch (err) {
    res.status(500).json({ message: "Todo is not going to save" });
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    return res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Todo is not fetching" });
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Todo is not deleting" });
  }
};


exports.complatedTask = async (req, res, next) => {
  try{
    const { id } = req.params;
    const todo = await Todo.findById(id)
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo)

  }catch(err){
        res.status(500).json({ message: "Don't going to update" });

  }



}