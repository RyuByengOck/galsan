import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './Header';

class Root extends Component {
 

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <App/>
            </BrowserRouter>
        );
    }
}

export default Root;