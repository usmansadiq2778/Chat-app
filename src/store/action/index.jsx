/* eslint-disable no-useless-constructor */
import React, { Component, useState } from 'react';
// import * as React from 'react';
import firebase from '../../config/firebase';

import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import getdatabase from '../../config/firebase';
import { ref, set, getDatabase } from 'firebase/database';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

function Facebook_login() {
    // is ma error a rha ha jab ma useNavigate use krta hu to
    const navigate = useNavigate();
    //                    //          //                //
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    // let { user, error } = this.state;

    return (
        //   console.log('chl rha ha');

        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                console.log('users data =>', user);
                let craete_data = {
                    Name: user.displayName,
                    image: user.photoURL,
                    uid: user.uid,
                };

                // firebase data data push in firebase using navigate
                const db = getDatabase();
                set(ref(db, `users / ${user.uid} `), {
                    craete_data,
                }).then(() => {
                    Navigate('/chatapp');
                    alert('successfully upload data');
                });

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage);

                // ...
            })
    );
    // }
}
// setTimeout(Facebook_login, 5000);
const set_data = () => {
    return (dispatch) => {
        console.log('running');
        dispatch({
            type: 'set_data',

            user: [
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
