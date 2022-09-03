/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import './style.css';
import { set_data } from '../../store/action';
import { Facebook_login } from '../../store/action';

class Home extends Component {
    render() {
        let user = { mail: 'bilalsadiq@gamil.com', name: 'kaleem jutt' };
        console.log('Home ,props =>', this.props);

        const users = this.props;
        return (
            //
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div>
                <>
                    <h1>This is Home page</h1>
                    <button onClick={() => this.props.set_data()}>
                        set data
                    </button>
                    <h2>Email: {users[users[1]]}</h2>
                    <br /> <br />
                    <br></br>
                    <Facebook_login />
                    <br></br>
                    <br></br>
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
    Facebook_login: () => dispatch(Facebook_login()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export { Home };
