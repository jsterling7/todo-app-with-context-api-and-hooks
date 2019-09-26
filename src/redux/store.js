import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchTodos } from './actions';


const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV === 'development') {
        // const { logger } = require('redux-logger');
        // middlewares.push(logger);
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

    setTimeout(() => {
        store.dispatch(fetchTodos());
    }, 50);
    return store;
};


export default configureStore;