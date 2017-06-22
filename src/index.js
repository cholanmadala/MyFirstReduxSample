import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store';
import {Provider} from 'react-redux';



// const myLogMiddleWare = (store) => (next) => (action) => {
// 	// console.log('The logged action is ', action);
// 	next(action);
// }
// const store = createStore(
// 		combineReducers({math: mathReducer, user: userReducer}),
// 		{},
// 		applyMiddleware(myLogMiddleWare, createLogger())
// 	);


// store.subscribe ( () => {
// 	 console.log("The store has updated!!!", store.getState().userReducer);
// })


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();