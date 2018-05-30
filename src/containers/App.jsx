import React, {Component} from 'react';
import logo from 'assets/images/logo.png';
import {orders} from 'data/test-orders';
import 'containers/App.css';
import 'components/OrderInfo';
import OrderInfoList from '../components/OrderInfoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = getInitialState(orders(), this.handleClick);
    }

    handleClick(id) {
        return () => {
            const newOrdersData = this.state.ordersData.map(order => {
                if (order.id === id) {
                    order.orderState.show = !order.orderState.show;
                }
                else {
                    order.orderState.show = false;
                }
                return order;
            });
            this.setState({ordersData: newOrdersData});
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-container">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Транспорт</h1>
                    </header>
                    <main className='App-main'>
                        <OrderInfoList orders={this.state.ordersData} />
                    </main>
                    <aside className='App-sidebar'>
                        <ul>
                            <li>Пункт меню</li>
                            <li>Пункт меню</li>
                            <li>Пункт меню</li>
                            <li>Пункт меню</li>
                        </ul>
                    </aside>
                </div>
            </div>
        );
    }
}

const getInitialState = (orders, handleShow) => {
    const ordersData = orders.map((order) => {
        const orderState = {
            show: false,
            handleShow: handleShow(order.id),
        }
        return {...order, orderState}
    });
    return {ordersData};
}
export default App;
