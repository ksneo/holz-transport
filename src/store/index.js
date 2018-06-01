import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

const getInitialState = (orders) => {
    const ordersData = orders.map((order) => {
        const orderState = {
            show: false,
        }
        return {...order, orderState}
    });
    return {ordersData, loading: false};
}

const defaultStore = configureStore(getInitialState([]));

export default function AppWithStore(app, store = defaultStore) {
    return (
        <Provider store={store}>
            {app}
        </Provider>
    )
}
