import React, { useEffect, useContext } from 'react';
import Footer from './Footer';
import Card from './pallet/Card';
import TodoContext from '../context/Todo';
import AddTodoForm from "./AddTodoForm";
import {fetchTodos, addTodo} from "../state/actions";
import TodoList from "./TodoList";


function App() {
    const [state, dispatch] = useContext(TodoContext);

    useEffect(() => {
        dispatch(fetchTodos(dispatch));
    }, []);

    return (
        <div className='container pt-3'>
            <div className='row justify-content-center pb-3'>
                <div className='col-auto'>
                    <h1>Welcome to the TODO App</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-auto'>
                    <Card>
                        <div className='row justify-content-center'>
                            <div className='col-auto'>
                                <AddTodoForm addTodo={(title) => addTodo(dispatch, title)}/>
                            </div>
                        </div>
                        <div className='row justify-content-center pt-2'>
                            <div className='col-auto'>
                                <Footer />
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-auto'>
                                <TodoList />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
