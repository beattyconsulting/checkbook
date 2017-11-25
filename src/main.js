import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './app'
import css from './main.less'

import reducers from './reducers';


const getInitialState = () => {
	const state = reducers(undefined, {});
	return {
		...state
	};
};


const configureStore = (initialState = getInitialState()) => createStore(reducers,
	initialState,
	compose(
		applyMiddleware(
			thunk
		),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	)
);

let store;
if (module.hot) {
	store = global.__REDUX_STORE = global.__REDUX_STORE || configureStore();
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers').default;
		store.replaceReducer(nextRootReducer);
	});
	module.hot.accept();
} else {
	store = configureStore();
}

ReactDOM.render(<App />, document.getElementById('beatty'))
