import React from 'react';
import PropTypes from 'prop-types';

const OrderInfo = (props) => {
    const {order} = props;
    return (
        <div className='OrderInfo'>
            <h3>Ордер № {order.id}</h3>
            <p className='OrderInfo-desc'>{order.comment}</p>
        </div>
    );
}

OrderInfo.propTypes = {
    order: PropTypes.object,
}

export default OrderInfo;