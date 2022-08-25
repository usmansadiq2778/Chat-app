/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import './style.css';
import { set_data } from '../../store/action';
import { Facebook_login } from '../../store/action';
import { ChatApp } from '../chatAPP';

// import { useNavigate } from 'react-router-dom';

class Home extends Component {
    // eslint-disable-next-line no-useless-constructor
    // constructor(props) {
    //     super(props);
    // }
    // state = { user: null, error: null };
    render() {
        // let navigate = useNavigate();

        let user = { mail: 'bilalsadiq@gamil.com', name: 'kaleem jutt' };
        // console.log('Home ,props =>', this.props);
        return (
            //
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div>
                <>
                    <h1>This is Home page</h1>
                    <button onClick={() => this.props.set_data()}>
                        set data
                    </button>
                    <br /> <br />
                    <br></br>
                    <button onClick={Facebook_login}>
                        Login with facebook
                    </button>
                    <br></br>
                    <br></br>
                    <button onClick={ChatApp}>Chat app</button>
                </>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.users,
    name: 'usman bilal ali',
});

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export { Home };
