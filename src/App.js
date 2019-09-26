import React from 'react';
import './App.css';
import TodoContext from './context/Todo';
import { StateProvider } from './state/StateProvider';
import { reducer, initialState } from './state/reducers/reducer';
import Home from './components/Home';


function App() {
    return (
        <StateProvider Context={TodoContext} reducer={reducer} initialState={initialState}>
            <Home/>
        </StateProvider>
    );
}

export default App;
