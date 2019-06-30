/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text, Button } from "react-native";
import AppNavigator from './navigator'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )


  }
}
