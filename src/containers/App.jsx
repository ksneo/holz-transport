import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from 'assets/images/logo.png';
import 'containers/App.css';
import OrderInfoList from 'components/OrderInfoList';
import { fetchOrders } from 'store/ordersData/actions';
import { HashRouter, Route, Link } from 'react-router-dom';

class App extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="App-container">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">Транспорт</h1>
                        </header>
                        <main className='App-main'>
                            <Route path='/settings' render={() => <p>Здесь будут настройки</p>} />
                            <Route exact path='/' render={() => <OrderInfoList orders={this.props.ordersData} />} />
                        </main>
                        <aside className='App-sidebar'>
                            <ul>
                                <li><Link to='/'>Заказы</Link></li>
                                <li><Link to='/settings'>Настройки</Link></li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </HashRouter>
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
