import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import thunk from 'redux-thunk';
import reducers from './reducers';
import Media from 'react-media'
import './main.less'
import {Provider} from 'react-redux'
import {ConnectedMainLayout} from "./main-layout"


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
                {matches => (
                    <div className={matches ? 'checkbook-small' : ''}>
                        <Switch>
                            <Route path="*" component={ConnectedMainLayout}/>
                        </Switch>
                    </div>
                )}
            </Media>
        </BrowserRouter>
    </Provider>,
    document.getElementById('beatty')
)
