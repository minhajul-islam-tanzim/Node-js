import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoItems from './context/TodoItems.jsx'

createRoot(document.getElementById('root')).render(
  <TodoItems>
    <App />
  </TodoItems>


)
