import {ADD_TODO, DELETE_TODO, FETCH_TODOS, SET_FILTER, TOGGLE_TODO} from "../actionTypes";
import {VISIBILITY_FILTERS} from "../../constants";

export const reducer = (state, action) => {
    console.log(action.type);
    switch(action.type) {
        case FETCH_TODOS:
            return {...state, todos: action.payload.todos}
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload.todo]};
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)};
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)};
        case SET_FILTER:
            return {...state, visibilityFilter: action.payload.filter};
        default:
            return state;
    }
};

export const initialState = {
    todos: [],
    visibilityFilter: VISIBILITY_FILTERS.ALL
};