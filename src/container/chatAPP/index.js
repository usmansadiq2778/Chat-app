/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Facebook_login } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import { createSelectorHook } from 'react-redux';
import {
    ref,
    set,
    getDatabase,
    onValue,
    get,
    child,
    push,
} from 'firebase/database';
import { useLocation } from 'react-router-dom';
import { Getdatafirebase } from '../../store/action';
import './Chatapp.css';
// import { useDispatch, useSelector } from 'react-redux';

function ChatApp(props) {
    let push = useNavigate();
    let location = useLocation();
    const dispatch = useDispatch();

    function GO() {
        push('/');
    }

    const handleClick = () => {
        dispatch(Getdatafirebase());
    };
    const users = [];
    const Keyy = '';
    let data;
    useEffect(() => {
        const Getdatafirebase = () => {
            // const [data, setdata] = useState('');

            // The signed-in user info.
            const db = getDatabase();
            const dbRef = ref(db, 'users');

            onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;

                    console.log('Child key', childKey);
                    const childData = childSnapshot.val();
                    users.push(childData);
                    dispatch({
                        type: 'Setfirebase',
                        payload: childData,
                    });
                    console.log('child data', childData);
                });
            });
        };

        Getdatafirebase();
    }, [dispatch]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         handleClick();
    //         console.log('This will run after 1 second!');
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);
    // console.log('users data firebase', users[0]);

    useEffect(() => {
        // users.filter((v, i) => {
        // <h4 key={i}> Name: {v.Name}</h4>;
        console.log('usman sadiq  name', users);
        // });
    }, []);

    // .indexOf(0)

    return (
        <>
            <div className='Chatapp'>
                <h1 style={{ textTransform: 'upperCase' }}>
                    Welcom in chat app
                </h1>
                <h1>{location.state.Name}</h1>
                <img
                    className='Avatar'
                    src={location.state.image}
                    alt={props}
                    width='200px'
                    height='200'
                    style={{ borderRadius: '100px', marginBottom: '50px' }}
                />
                <h2>{location.state.uid}</h2>

                <br></br>
                <br></br>
                <div className='Main'>
                    <div>
                        <h3>Chat users</h3>

                        {users.map((v, i) => {
                            <h2 key={i}> Name :{v[0].Name}</h2>;
                        })}
                    </div>
                </div>
                <button onClick={GO}> Go to Home</button>
            </div>
        </>
    );
}

// }
const mapStateToProps = (state) => ({
    // return {
    users: state.users,

    current_user: state.current_user,
});

//   },
// }

const mapDispatchToProps = (dispatch) => ({
    Facebook_login: () => dispatch(Facebook_login()),
    GetUser: () => dispatch(Getdatafirebase()),
});
export default connect(mapStateToProps, mapDispatchToProps);
export { ChatApp };
