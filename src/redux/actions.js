import axios from 'axios';
import * as actionTypes from "./actionTypes";
import uuid from 'uuid/v4';


const API = axios.create({
    baseURL: 'http://localhost:4000/todos'
});


const fetchTodosSuccess = todos => ({
   type: actionTypes.FETCH_TODOS,
   payload: { todos }
});


export const fetchTodos = () => (
    async dispatch => {
        try {
            const response = await API.get();
            dispatch(fetchTodosSuccess(response.data));
            return response;
        } catch (error) {
            console.error(error);
        }
    }
);


export const toggleTodoSuccess = id => ({
    type: actionTypes.TOGGLE_TODO,
    payload: { id }
});


export const toggleTodo = todo => (
    async dispatch => {
        try {
            const response = await API.put(`/${todo.id}`, {...todo, completed: !todo.completed});
            dispatch(toggleTodoSuccess(todo.id));
        } catch(error) {
            console.error(error);
        }
    }
);


export const setFilter = filter => ({
    type: actionTypes.SET_FILTER,
    payload: { filter }
});


export const addTodoSuccess = todo => ({
    type: actionTypes.ADD_TODO,
    payload: { todo }
});


export const addTodo = title => (
    async dispatch => {

        const createNewTodo = title => {
            const id = uuid();
            return {id, title: title, completed: false}
        };

        try {
            const todo = createNewTodo(title);
            const response = await API.post('/', todo);
            dispatch(addTodoSuccess(todo));
            return response;
        } catch(error) {
            console.error(error);
        }
    }

);


export const deleteTodoSuccess = id => ({
   type: actionTypes.DELETE_TODO,
   payload: { id }
});


export const deleteTodo = id => (
    async dispatch => {
        try {
            const response = await API.delete(`/${id}`);
            dispatch(deleteTodoSuccess(id));
            return response;
        } catch(error) {
            console.error(error);
        }
    }
);