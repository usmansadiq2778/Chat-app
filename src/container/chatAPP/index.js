import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Facebook_login } from '../../store/action';
import Home from '../Home';

function ChatApp() {
    let push = useNavigate();
    function GO() {
        push('/');
    }
    // console.log('props chat app =>', this.props);
    return (
        <div>
            <h1 style={{ textTransform: 'upperCase' }}>Welcom in chat app</h1>
            <button onClick={GO}> Go to Home</button>
        </div>
    );
    // }
}
// }
const mapStateToProps = (state) => ({
    current_user: state.current_user,
});

const mapDispatchToProps = (dispatch) => ({
    Facebook_login: () => dispatch(Facebook_login()),
});
export default connect(mapStateToProps, null);
export { ChatApp };
