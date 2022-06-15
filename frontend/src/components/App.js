import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { Provider as ALertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import store from '../store';
import Header from './layouts/Header';
import Alerts from "./layouts/Alerts";
import Dashboard from './leads/Dashboard';


// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ALertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </ALertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
