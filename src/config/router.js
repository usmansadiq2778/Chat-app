import React, { Componenet } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../container/Home';

import { ChatApp } from '../container/chatAPP';

function Routers() {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/chatapp' element={<ChatApp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export { Routers };
