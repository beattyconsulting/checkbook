import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk';
import reducers from './reducers';
import Media from 'react-media'
import './main.less'
import {Provider} from 'react-redux'
import {AppRoutes} from "../app-routes"


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

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename='/'>
            <Media query="(max-width: 599px)">
                {matches => matches ? (
                    <div className='checkbook-small'>
                        <AppRoutes/>
                    </div>
                ) : (
                    <div>
                        <AppRoutes/>
                    </div>
                )}
            </Media>
        </BrowserRouter>
    </Provider>,
    document.getElementById('beatty')
)
