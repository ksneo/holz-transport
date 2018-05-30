import React from 'react';
import PropTypes from 'prop-types';
import 'components/OrderInfo.css';

const OrderInfo = (props) => {
    const {order, orderState} = props;

    return (
        <div className='OrderInfo'>
            <h3 className='OrderInfo-title'>
                <span>Доставка № {order.id}</span>
                <button className='OrderInfo-show' onClick={orderState.handleShow}>
                    <span>{orderState.show ? 'Скрыть' : 'Показать'}</span>
                </button>
            </h3>
            <p className='OrderInfo-short'>
                <span className='OrderInfo-dest'>{order.destination}</span>
                <span className='OrderInfo-dateDelivery'>
                    {new Date(order.dateDelivery).toLocaleDateString('ru')}
                </span>
                <span className='OrderInfo-mass'> Масса: {order.mass} кг.</span>
            </p>
            {orderState.show
                ? <p className='OrderInfo-desc'>
                    <span className='OrderInfo-comment'>{order.comment}</span>
                    <span className='OrderInfo-documents'>Документы:
                        {order.documents.map((d, i) => i ? ', ' + d : d)}
                    </span>
                </p>
                : null}
        </div>
    );
}

OrderInfo.propTypes = {
    order: PropTypes.object.isRequired,
    orderState: PropTypes.object.isRequired,
}

OrderInfo.defaultProps = {
    order: {},
    orderState: {
        open: false,
        handleShow() {return null},
    }
}

export default OrderInfo;