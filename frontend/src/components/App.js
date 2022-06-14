import ReactDOM from 'react-dom'
import React, { Component } from 'react';

import Header from './layouts/Header';

class App extends Component {
    render() {
        return (
            <Header/>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))
