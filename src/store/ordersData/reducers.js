import {types} from './actions';

export function ordersData(state=[], action) {
    switch (action.type) {
        case types.TOGGLE_FULL_ORDER:
            return state.map(order => {
                if (order.id === action.id) {
                    order.show = !order.show;
                }
                return order;
            });
        default:
            return state;
    }
}
