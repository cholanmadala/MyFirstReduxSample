import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import math from './Reducers/mathReducer';
import user from './Reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const store = createStore(
		combineReducers({math, user}),
		{},
		applyMiddleware(createLogger(), thunk, promise())
	);

export default store;