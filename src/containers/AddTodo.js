import { connect } from 'react-redux';
import AddTodoFrom from '../components/AddTodoForm';
import { addTodo } from '../redux/actions';


const mapDispatchToProps = dispatch => ({
    addTodo: (title) => dispatch(addTodo(title))
});


const AddTodo = connect(null, mapDispatchToProps)(AddTodoFrom);


export default AddTodo;