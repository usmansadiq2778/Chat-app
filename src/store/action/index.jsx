/* eslint-disable react/jsx-no-comment-textnodes */
import firebase from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { ref, set, getDatabase } from 'firebase/database';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import getdatabase from '../../config/firebase';

function Facebook_login() {
    const navigate = useNavigate();
    const auth = getAuth();
    // const dispatch = useDispatch();

    const provider = new FacebookAuthProvider();
    // const [dispacth, setdispach] = useState();
    //                    //          //                //

    const handleFacebookLogin = (props) => {
        return (dispatch) => {
            signInWithPopup(auth, provider)
                .then((response) => {
                    // The signed-in user info.
                    const user = response.user;

                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    console.log('Users Data => ', user);
                    let create_data = {
                        Name: user.displayName,
                        image: user.photoURL,
                        uid: user.uid,
                    };

                    // firebase data data push in firebase using navigate
                    const db = getDatabase();
                    set(ref(db, `users / ${user.uid} `), {
                        create_data,
                    }).then(() => {
                        dispatch({
                            type: 'SETUSER',
                            payload: create_data,
                        });

                        navigate('/chatapp');
                        alert('successfully upload data');
                    });
                    // ...
                })
                .catch((error) => {
                    // Handle Errors here.
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // ...
                });
        };
    };

    return (
        <>
            <button onClick={handleFacebookLogin()}>Login with Facebook</button>
        </>
    );
}
// setTimeout(Facebook_login, 5000);
const set_data = () => {
    return (dispatch) => {
        console.log('running');
        dispatch({
            type: 'set_data',

            payloaduser: [
                {
                    name: 'ali raza sadiq  ',
                    age: '20 ',
                },
                {
                    name: 'usman sadiq',
                    age: '23',
                },
                {
                    name: 'Muhammad bilal sadiq',
                    age: '25',
                },
            ],
        });
    };
};

export { set_data, Facebook_login };
// { set_data, Facebook_login };
