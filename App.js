import React from "react";
import { View, Text, Button } from "react-native";
import AppNavigator from './navigator'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homeReducer from './homeReducer'

const store = createStore(homeReducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}
