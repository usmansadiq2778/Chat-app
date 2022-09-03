import React from 'react';
import Home from './container/Home';
import { Routers } from './config/router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Routers />
            </div>
        );
    }
}

export { App };
