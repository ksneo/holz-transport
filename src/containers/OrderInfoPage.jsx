import React, { Component } from 'react';
import OrderInfoList from 'components/OrderInfoList.jsx';
import Filter from 'components/Filter.jsx';

class OrderInfoPage extends Component {
    render() {
        return (
            <div className="OrderInfoPage">
                <Filter />
                <OrderInfoList orders={this.props.ordersData} />
            </div>
        );
    }
}

export default OrderInfoPage;
