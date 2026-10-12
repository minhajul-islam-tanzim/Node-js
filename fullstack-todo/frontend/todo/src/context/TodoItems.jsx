import { useContext, useState, createContext } from "react";



export const TodoContext = createContext();


const TodoItems = ({children}) => {
    const [todos, setTodos] = useState([])

    const addTodo = (text, date) => {
        setTodos([ ...todos, {id: Date.now(), text, date, completed: false}])
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
