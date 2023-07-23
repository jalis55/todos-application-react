function TodoItem({id,isCompleted,title,toggleTodo,deleteTodos}){
    return(
    <li className='list-group-item w-25' key={id}>
    <label>
      <input type="checkbox" checked={isCompleted} 
      onChange={e => toggleTodo(id, e.target.checked)}
       />
      {title}
    </label>
    <button className='btn btn-danger'
     onClick={() => deleteTodos(id)}
    >Delete
    </button>

  </li>
    )
}

export default TodoItem;