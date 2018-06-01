import { combineReducers } from 'redux';
import { ordersData, loading } from './ordersData/reducers';

export default combineReducers({
    ordersData,
    loading,
});