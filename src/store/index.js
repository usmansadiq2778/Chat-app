import reducer from './reducer';

import thunk from 'redux-thunk';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducer,

    middleware: [thunk],
});
export default store;
