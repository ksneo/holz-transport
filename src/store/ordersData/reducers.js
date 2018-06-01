import {types} from './actions';
import { success, fail } from '../../helpers/modificators';

export function ordersData(state=[], action) {
    switch (action.type) {
        case types.TOGGLE_FULL_ORDER:
            return state.map(order => {
                if (order.id === action.id) {
                    order.orderState.show = !order.orderState.show;
                }
                else {
                    order.orderState.show = false;
                }
                return order;
            });
        case success(types.LOAD_ORDERS):
            return action.orders.map((order) => {
                return {...order, orderState: { show: false }};
            });
        default:
            return state;
    }
}

export function loading(state=false, action) {
    switch (action.type) {
        case types.LOAD_ORDERS:
            return true;
        case (success(types.LOAD_ORDERS), fail(types.LOAD_ORDERS)):
            return false;
        default:
            return state;
    }
}