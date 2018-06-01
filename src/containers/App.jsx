import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import 'containers/App.css';
import OrderInfoList from 'components/OrderInfoList';
import { fetchOrders } from 'store/ordersData/actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchOrders();
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
        loading: state.loading,
    }
}
const mapActionsToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}
export default connect(mapStateToProps, mapActionsToProps)(App);
