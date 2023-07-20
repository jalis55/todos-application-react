import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
function App() {
  const [newItem,setNewItem]=useState("")
  const [todos,setTodos]=useState([])
  function handleSubmit(e){
    console.log('test');
    e.preventDefault();
    setTodos(currtentTods=>{
      return [
        ...currtentTods
        ,{id:crypto.randomUUID(),isCompleted:false,title:newItem}
      ]
    })
  }
  console.log(todos);
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
                  <li className='list-group-item w-25'>
                  <label>
                    <input type="checkbox" checked={todo.isCompleted}/>
                    {todo.title}
                  </label>
                  <button className='btn btn-danger'>Delete</button>
        
                </li>
                )
        })}

        
      </ul>
    </div>

    </>
  );
}

export default App;
