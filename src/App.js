import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import NewTodoForm from './newTodoForm';
function App() {

  const [todos, setTodos] = useState([])

  function toggleTodo(id, isCompleted) {
    console.log(isCompleted);
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
        <ul className='list-group'>
          {todos.length == 0 && 'No Items'}
          {todos.map(todo => {
            return (
              <li className='list-group-item w-25' key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.isCompleted} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  {todo.title}
                </label>
                <button className='btn btn-danger' onClick={() => deleteTodos(todo.id)}>Delete</button>

              </li>
            )
          })}


        </ul>
      </div>

    </>
  );
}

export default App;
