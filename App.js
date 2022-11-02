import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './src/Navigation'
import store, { persistor } from './src/redux'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        )
    }
}
