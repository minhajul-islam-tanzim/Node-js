import {  useState, createContext } from "react";
import { addItemToServer, fetchFromServer,  deleteFromServer } from "../services/itemServices";
import { useEffect } from "react";



export const TodoContext = createContext();


const TodoItems = ({children}) => {
    const [todos, setTodos] = useState([])

const loadTodos = async () => {
            try{
                const items = await fetchFromServer()
                console.log(items)
                setTodos(items)
            }catch(err){
                   console.log("Todos not available", err.message);
            }

        }

    useEffect(() => {
        loadTodos()
    }, [])


    const addTodo = async (text, date) => {
    try {
        await addItemToServer(text, date);
        await loadTodos();
    } catch (err) {
        console.log("Todo doesn't exist", err.message);
    }
};

    const deleteTodo = async (id) => {
        try{
            await deleteFromServer(id)
            await loadTodos();
        }catch(err){
        console.log("Todo doesn't exist for delete", err.message);
        }
    }

    

    const toggleTodo = (id) => {
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
