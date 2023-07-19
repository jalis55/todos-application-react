import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
function App() {
  cost [newItem,setNewItem]=useState("")
  function handleSubmit(e){
    console.log('submited')
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
      <div className='list-group'>
        <li className='list-group-item w-25'>
          <label>
            <input type="checkbox"/>
            item 1
          </label>
          <button className='btn btn-danger'>Delete</button>

        </li>
        
      </div>
    </div>

    </>
  );
}

export default App;
