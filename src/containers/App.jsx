import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import 'containers/App.css';
import OrderInfoList from 'components/OrderInfoList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-container">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Транспорт</h1>
                    </header>
                    <main className='App-main'>
                        <OrderInfoList orders={this.props.ordersData} />
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

const mapStateToProps = (state) => {
    return {
        ordersData: state.ordersData,
    }
}

export default connect(mapStateToProps)(App);
