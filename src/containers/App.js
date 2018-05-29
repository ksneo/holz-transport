import React, {Component} from 'react';
import logo from 'assets/images/logo.svg';
import {orders} from 'data/test-orders';
import 'containers/App.css';
import 'components/OrderInfo';
import OrderInfoList from '../components/OrderInfoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-container">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Хольцшутц Транспорт</h1>
                    </header>
                    <main>
                        <OrderInfoList orders={orders()} />
                    </main>
                    <aside>
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

export default App;
