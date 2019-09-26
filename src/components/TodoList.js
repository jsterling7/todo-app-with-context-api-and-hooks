import React, { useContext } from 'react';
import Todo from './Todo';
import TodoContext from '../context/Todo'
import {deleteTodo, toggleTodo} from "../state/actions";
import {VISIBILITY_FILTERS} from "../constants";


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return todos.filter(t => t.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return todos.filter(t => !t.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return todos;
    }
};


const TodoList = () => {

    const [state, dispatch] = useContext(TodoContext);
    const todos = getVisibleTodos(state.todos, state.visibilityFilter);


    const todosList = todos.map(todo => (
        <li key={todo.id} className='list-group-item'>
            <Todo
                todo={todo}
                toggleTodo={(todo) => toggleTodo(dispatch, todo)}
                deleteTodo={(id) => deleteTodo(dispatch, id)}
            />
        </li>
    ));

    return (
         <div>
             <ul className='list-group'>
                {todosList}
             </ul>
         </div>
    )
};

export default TodoList;