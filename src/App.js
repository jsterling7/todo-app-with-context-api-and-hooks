import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import './App.css';
import AddTodo from './containers/AddTodo';
import Card from './components/pallet/Card';

function App() {
  return (
      <Provider store={configureStore()}>
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
                                    <AddTodo/>
                                </div>
                            </div>
                            <div className='row justify-content-center pt-2'>
                                <div className='col-auto'>
                                    <Footer/>
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-auto'>
                                    <VisibleTodoList/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
      </Provider>
  );
}

export default App;
