import React, { useReducer } from 'react';

export const StateProvider = ({ Context, reducer, initialState, children }) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
        {children}
    </Context.Provider>
);