import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function ChatApp() {
    let push = useNavigate();
    function GO() {
        push('/');
    }
    return (
        <div>
            <h1 style={{ textTransform: 'upperCase' }}>Welcom in chat app</h1>
            <button onClick={GO}> Go to Home</button>
        </div>
    );
    // }
}
export { ChatApp };
