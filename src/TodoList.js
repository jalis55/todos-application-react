import { useState } from 'react';
import TodoItem from './TodoItem';


function TodoLIst({todos,toggleTodo,deleteTodos}){
  
    return(
        <ul className='list-group'>
        {todos.length == 0 && 'No Items'}
        {todos.map(todo => {
          return (
            // <TodoItem id={todo.id} title={todo.title} isCompleted={todo.isCompleted} key={todo.id}/> 
            //shortcut
            <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodos={deleteTodos}
            key={todo.id}
            />
          )
        })}


      </ul>
    )
}

export default TodoLIst