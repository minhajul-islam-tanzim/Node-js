import { useContext, useState, createContext } from "react";
import { addItemToServer } from "../services/itemServices";



export const TodoContext = createContext();


const TodoItems = ({children}) => {
    const [todos, setTodos] = useState([])

    const addTodo = async (text, date) => {
        try{
            const newTodo = await addItemToServer(text, date);

            const newTodoItems = [
                ...todos,
                newTodo
            ]
            setTodos(newTodoItems)


        }catch(err){



            console.log("Todo dosent exist", err.message);
        }
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id) => {
         console.log("toggle called", id);
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }


    const allContext = {todos ,addTodo, deleteTodo, toggleTodo}


  return (
    <div>
        <TodoContext.Provider value={allContext}>
            {children}
        </TodoContext.Provider>
    </div>
  )
}

export default TodoItems
