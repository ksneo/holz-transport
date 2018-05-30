import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import {orders} from 'data/test-orders';

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
    return {ordersData};
}

const defaultStore = configureStore(getInitialState(orders()));

export default function AppWithStore(app, store = defaultStore) {
    return (
        <Provider store={store}>
            {app}
        </Provider>
    )
}
