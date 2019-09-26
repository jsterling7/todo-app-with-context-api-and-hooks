import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import TodoList from '../components/TodoList';
import {deleteTodo, toggleTodo} from '../redux/actions';


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

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});


const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
});


const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);


export default VisibleTodoList;