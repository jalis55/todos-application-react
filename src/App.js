import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import NewTodoForm from './NewTodoForm.js';
import TodoLIst from './TodoList';


function App() {

  const [todos, setTodos] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if (localValue==null) return []
    return JSON.parse(localValue)

  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function toggleTodo(id, isCompleted) {
    
    setTodos(currtentTods => {
      return currtentTods.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted }
        }
        return todo
      })
    })
  }
  function addTods(title){
            setTodos(currtentTods => {
            return [
                ...currtentTods
                , { id: crypto.randomUUID(), isCompleted: false, title }
            ]
        })
  }
  function deleteTodos(id) {
    setTodos(currtentTods => {
      return currtentTods.filter(todo => todo.id != id)
    })
  }

  return (
    <>

      <div className='container'>
        <NewTodoForm onSubmit={addTods}/>
        <h1>ToDos List</h1>
        <TodoLIst todos={todos} toggleTodo={toggleTodo} deleteTodos={deleteTodos}/>

      </div>

    </>
  );
}

export default App;
