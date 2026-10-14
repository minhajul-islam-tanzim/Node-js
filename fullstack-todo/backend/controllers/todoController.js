const Todo = require("../model/todoModel")



exports.createTodo = async (req, res, next) => {
    try{

        const {text, date} = req.body;
        const todoItem = new Todo({text, date});
        await todoItem.save()
        res.status(201).json(todoItem)
    }catch(err){
    res.status(500).json({ message: "Todo is not going to save" });

    }

}