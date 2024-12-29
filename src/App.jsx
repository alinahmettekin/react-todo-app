import { useEffect, useState } from "react";
import "./style.css";
import { TodoList } from "./components/TodoList";
import { NewTodoForm } from "./components/NewTodoForm";


export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
      
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos, 
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }


  

  function toggleTodo(id, completed) {
    console.log("toggleTodo called with:", id, completed);
    setTodos(prevTodos => {
      return prevTodos.map( todo => {
        if (todo.id === id) {
          console.log("Updating todo:", todo);
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    console.log("Delete todo called with:", id);
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  
  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}