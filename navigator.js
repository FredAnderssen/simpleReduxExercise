
import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailScreen from './DetailScreen'
import HomeScreen from './HomeScreen'

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailScreen
    }
  }, {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator)
