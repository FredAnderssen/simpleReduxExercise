import React from "react";
import { Text, View, Assets, Constants, Button, Colors, Typography } from 'react-native-ui-lib'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'

const BUTTON_SPACE = 20;

class Home extends React.Component {
  render() {
    const { navigation } = this.props
    const buttonColor = this.props.buttonEnabled ? '#30B650' : '#FB3C62'
    const bgColor = (bool) =>
      bool ? this.props.changeButtonColorTrue() : this.props.changeButtonColorFalse()

    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: "center",
          padding: 30,
          backgroundColor: 'skyblue'
         }}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button
             label="Details"
             onPress = {() => {
               navigation.push('Details')
             }}
            />
          </View>
          <View>
          <Button
             label='Change Color'
             labelStyle={{fontWeight: '600'}}
             style={{marginBottom: BUTTON_SPACE*15, backgroundColor: buttonColor}}
             enableShadow
             onPress={() => { bgColor(!this.props.buttonEnabled) }}
             />
          </View>
        </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeButtonColorTrue: () => dispatch({type: 'BUTTON_TRUE'}),
    changeButtonColorFalse: () => dispatch({type: 'BUTTON_FALSE'})
  }
}

const mapStateToProps = (state) => {
  return {
    buttonEnabled: state.buttonEnabled
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
