// import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDMiwoGmd1nDFJ9MBLQBwuUk44F4hmDNnI',
    authDomain: 'chat-app-redux-782f5.firebaseapp.com',
    projectId: 'chat-app-redux-782f5',
    storageBucket: 'chat-app-redux-782f5.appspot.com',
    messagingSenderId: '781655010307',
    appId: '1:781655010307:web:162b51220155e51df23236',
    measurementId: 'G-G3CFV5GKYL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getDatabase(app);
