
    
import React, { Component } from 'react';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Landing from '../src/components/screens/landing';
const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Landing />
            </Provider>
        )
    }
}
export default App