// import TodoList from "./TodoList";

// const todoItems = () => {


//   const { todos, deleteTodo, toggleTodo } = useContext(TodoContext);


//   const activeTodos = todos.filter((todo) => !todo.completed);
//   const completedTodos = todos.filter((todo) => todo.completed);



//   return <div>
//        <div>
//       {activeTodos.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-700 mb-3">
//             Tasks to Do
//           </h2>
//           <div className="space-y-3">
//             {activeTodos.map((item) => (
//               <TodoList
//                 key={item.id}
//                 id={item.id}
//                 todoDate={item.dueDate}
//                 todoName={item.name}
//                 completed={item.completed}
//                 onDeleteClick={deleteTodo}
//                 onToggleComplete={ toggleTodo}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {completedTodos.length > 0 && (
//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-500 mb-3">
//             Completed Tasks
//           </h2>
//           <div className="space-y-3">
//             {completedItems.map((item) => (
//               <TodoList
//                 key={item.id}
//                 id={item.id}
//                 todoDate={item.dueDate}
//                 todoName={item.name}
//                 completed={item.completed}
//                 onDeleteClick={deleteTodo}
//                 onToggleComplete={ toggleTodo}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>

//   </div>;
// };

// export default todoItems;
