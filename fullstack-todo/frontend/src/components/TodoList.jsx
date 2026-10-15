import { useContext } from "react";
import { TodoContext } from "../context/TodoItems";



const TodoList = () => {
  
  const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  

  return (
    <div className="w-123 mx-auto mt-6">
      {/* */}
      <h2 className="mb-3 font-semibold">Start Task</h2>
      <div className="flex flex-col gap-3">
        {activeTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-4 border-2 rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                console.log("clicked", todo.id);
                toggleTodo(todo.id);
              }}
            />
            <span>{todo.text}</span>
            <span className="text-gray-500">{todo.date}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* */}
      <h2 className="mt-6 mb-3 font-semibold">completed Task</h2>
      <div className="flex flex-col gap-3">
        {completedTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-4 border-2 rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="line-through text-gray-500">{todo.text}</span>
            <span className="text-gray-500">{todo.date}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 text-white bg-red-500 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
