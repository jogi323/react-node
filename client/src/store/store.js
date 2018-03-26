import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';

const middleWare = [thunk];

const initialState = {};

const store = createStore(
    RootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare)
    )
);

export default store;