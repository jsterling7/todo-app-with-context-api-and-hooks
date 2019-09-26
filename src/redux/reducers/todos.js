import {TOGGLE_TODO, ADD_TODO, DELETE_TODO, FETCH_TODOS} from "../actionTypes";


const initialState = [];


const todos = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS:
            return action.payload.todos;
        case TOGGLE_TODO:
            //handle todos as an object
            // const currTodo = {...newState[action.payload.id]};
            // newState[action.payload.id] = {...currTodo, completed: !currTodo.completed};

            //handle todos as an array
            console.log(state);
            return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);
        case ADD_TODO:
            return [...state, action.payload.todo];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }

};


export default todos;