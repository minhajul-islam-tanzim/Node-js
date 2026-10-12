import { useState, useContext } from "react"
import { TodoContext } from "../context/TodoItems"

const TodoInp = () => {

    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const { addTodo } = useContext(TodoContext)


    const handleSubmit = (e) => {

        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text.trim(), date)
        setText("")
        setDate("")

    }


  return (


    <div className="w-123 mx-auto mt-6">
  <form
    onSubmit={handleSubmit}
    className="flex items-center gap-2 p-3 border rounded-lg shadow-sm"
  >
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Name"
      className="flex-1 px-3 py-2 border rounded-md outline-none focus:border-blue-600"
    />
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="px-3 py-2 border rounded-md outline-none focus:border-blue-600"
    />
    <button
      type="submit"
      className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
    >
      Add
    </button>

  </form>
</div>
  )
}

export default TodoInp
