import React from 'react';


const Todo = ({ todo, toggleTodo, deleteTodo }) => (
    <div>
      <span onClick={() => toggleTodo(todo)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</span>
      <span className='fas fa-times ml-2' style={{cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}></span>
    </div>
);


export default Todo;
    
