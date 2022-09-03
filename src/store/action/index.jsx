/* eslint-disable react/jsx-no-comment-textnodes */
import firebase from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {
    ref,
    set,
    getDatabase,
    onValue,
    get,
    child,
    push,
} from 'firebase/database';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
// eslint-disable-next-line react-hooks/rules-of-hooks

let userid;
function Facebook_login() {
    const navigate = useNavigate();
    const auth = getAuth();
    // const dispatch = useDispatch();

    const provider = new FacebookAuthProvider();
    // const [dispacth, setdispach] = useState();
    //                    //          //                //

    const handleFacebookLogin = (event) => {
        return (dispatch) => {
            signInWithPopup(auth, provider)
                .then((response) => {
                    // The signed-in user info.
                    const user = response.user;

                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    console.log('Users Data => ', user);
                    let create_data = {
                        // Name: user.displayName,
                        // image: user.photoURL,
                        // uid: user.uid,
                    };
                    // userid = user.uid;

                    // firebase data data push in firebase using navigate
                    const db = getDatabase();
                    set(ref(db, `users/${user.uid}`), {
                        // create_data,
                        Name: user.displayName,
                        image: user.photoURL,
                        uid: user.uid,
                    }).then(() => {
                        // dispatch({
                        //     type: 'SETUSER',
                        //     payload: create_data,
                        // });

                        // eslint-disable-next-line no-undef
                        navigate('/chatapp', {
                            state: {
                                Name: user.displayName,
                                image: user.photoURL,
                                uid: user.uid,
                            },
                        });
                        alert('successfully upload data');
                        // <Navigate to='/chatapp' state={create_data} />;
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

const Getdatafirebase = () => {
    // const [data, setdata] = useState('');
    return (dispatch) => {
        // The signed-in user info.

        const dbRef = ref(getDatabase());
        const users = [];
        get(child(dbRef, `/users/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    dispatch({ type: 'Setfirebase', payload: snapshot.val() });

                    push(child(dbRef, 'users'));

                    // setdata(snapshot.val());
                    console.log('firebase data=>', snapshot.val());
                } else {
                    console.log('No data available');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
};
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

export { set_data, Facebook_login, Getdatafirebase };
// { set_data, Facebook_login };
