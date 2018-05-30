import {types} from './actions';

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
        default:
            return state;
    }
}
