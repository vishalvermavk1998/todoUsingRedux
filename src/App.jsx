import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import './App.css'

function App() {
  
  return (
    <>
    <div className="flex justify-center  items-center flex-col">
    <h1 className="text-4xl font-bold inline-block border-b-2 border-black">Todo List</h1>
    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App
