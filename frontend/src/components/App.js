import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Component, Fragment } from 'react';

import store from '../store';
import Header from './layouts/Header';
import Dashboard from './leads/Dashboard';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
