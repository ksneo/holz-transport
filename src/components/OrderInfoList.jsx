import React from 'react';
import PropTypes from 'prop-types';
import OrderInfo from 'components/OrderInfo';

const OrderInfoList = (props) => {
    return props.orders.map((order) => {
        const {orderState, ...orderData} = order;
        return (<OrderInfo key={order.id} order={orderData} orderState={orderState} />);
    });
}

OrderInfoList.propTypes = {
    orders: PropTypes.array,
}

export default OrderInfoList;