import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFullOrder } from 'store/ordersData/actions';
import 'components/OrderInfo.css';

const OrderInfo = (props) => {
    const {order, orderState, handleShow} = props;
    return (
        <div className='OrderInfo'>
            <h3 className='OrderInfo-Title'>
                <span>Доставка № {order.id}</span>
                <button className='OrderInfo-ShowBtn' onClick={() => handleShow(order.id)}>
                    <span>{orderState.show ? 'Скрыть' : 'Показать'}</span>
                </button>
            </h3>
            <p className='OrderInfo-Short'>
                <span className='OrderInfo-Dest'>{order.destination}</span>
                <span className='OrderInfo-DateDelivery'>
                    {new Date(order.dateDelivery).toLocaleDateString('ru')}
                </span>
                <span className='OrderInfo-Mass'> Масса: {order.mass} кг.</span>
            </p>
            {orderState.show
                ? <p className='OrderInfo-Desc'>
                    <span className='OrderInfo-Comment'>{order.comment}</span>
                    <span className='OrderInfo-Documents'>Документы:
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleShow: (id) => dispatch(toggleFullOrder(id)),
    }
}

export default connect(null, mapDispatchToProps)(OrderInfo);