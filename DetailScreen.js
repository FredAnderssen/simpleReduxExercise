import React from "react";
import { View, Text, Button } from "react-native";

class DetailScreen extends React.Component {
  render() {
    const { navigation } = this.props

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
         title="Go to the 'Details' screen :)"
         onPress = {() => {
          navigation.push('Details')
         }}
        />
        <Button
          title="Go Home"
          onPress = {() => {
            navigation.navigate('Home')
          }}
        />
        <Button
          title='Hello there'
          onPress = {() => {
            console.log('hello there')
          }}
        />

        <Button
          title="Go Back"
          onPress = {() => {
            navigation.goBack()
          }}
        />
      </View>
    )
  }
}

export default DetailScreen
