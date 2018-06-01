import {makeActionCreator} from 'helpers/makeActionCreator';
import { orders } from '../../data/test-orders';
import { success, fail } from '../../helpers/modificators';

const TOGGLE_FULL_ORDER = 'TOGGLE_FULL_ORDER';
const LOAD_ORDERS = 'LOAD_ORDERS';

export const types = {
    TOGGLE_FULL_ORDER,
    LOAD_ORDERS,
}

export const toggleFullOrder = makeActionCreator(TOGGLE_FULL_ORDER, 'id');
export const loadOrders = makeActionCreator(LOAD_ORDERS, 'loading');
export const loadOrdersSuccess = makeActionCreator(success(LOAD_ORDERS), 'loading', 'orders');
export const loadOrdersFail = makeActionCreator(fail(LOAD_ORDERS), 'loading', 'error');
export const fetchOrders = () => {
    return async (dispatch) => {
        dispatch(loadOrders());
        try {
            const result = await new Promise((resolve, reject) => {
                resolve(orders());
            });
            dispatch(loadOrdersSuccess(false, result));
        } catch(e) {
            dispatch(loadOrdersFail(false, 'Ошибка загрузки ордеров'));
        }
    }
}
