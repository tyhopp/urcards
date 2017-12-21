import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { TabNavigator, StackNavigator } from 'react-navigation'
// import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default class Quiz extends Component {
  render() {
    const { navigate } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>You're in Quiz.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: 'Avenir-Black',
    fontSize: 26,
    color: '#42A590'
  }
});
