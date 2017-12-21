import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { NavigationActions } from 'react-navigation'
// import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'

// project components
import QuizCardFront from './QuizCardFront'


export default class Quiz extends Component {

  state = {
    onFront: true,
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
      </View>
    );
  }
}

const navigateAction = NavigationActions.navigate({
  routeName: 'Quiz',
  params: {},
  action: NavigationActions.navigate({ routeName: 'QuizCardFront'})
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    alignItems: "center",
    justifyContent: "center"
  },
});
