import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
function App() {
  const [newItem,setNewItem]=useState("")
  const [todos,setTodos]=useState([])
  function handleSubmit(e){
    e.preventDefault();
    setTodos(currtentTods=>{
      return [
        ...currtentTods
        ,{id:crypto.randomUUID(),isCompleted:false,title:newItem}
      ]
    })
    setNewItem("")
  }
  function toggleTodo(id,isCompleted){
    console.log(isCompleted);
    setTodos(currtentTods=>{
      return currtentTods.map(todo=>{
        if(todo.id===id){
          return {...todo,isCompleted}
        }
        return todo
      })
    })
  }
  function deleteTodos(id){
    
    setTodos(currtentTods=>{
      return currtentTods.filter(todo=>todo.id !=id)
    })
  }
 
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Add Item</label>
         <input type="text" 
         value={newItem} onChange={(e)=>setNewItem(e.target.value)}
         className='form-control w-25' id="item"/>
        </div>
        

        <button className='btn btn-primary'>Add</button>
      </form>
      <h1>ToDos List</h1>
      <ul className='list-group'>
        {todos.map(todo=>{
                  return (
                  <li className='list-group-item w-25' key={todo.id}>
                  <label>
                    <input type="checkbox" checked={todo.isCompleted} onChange={e=>toggleTodo(todo.id,e.target.checked)}/>
                    {todo.title}
                  </label>
                  <button className='btn btn-danger' onClick={()=>deleteTodos(todo.id)}>Delete</button>
        
                </li>
                )
        })}

        
      </ul>
    </div>

    </>
  );
}

export default App;
