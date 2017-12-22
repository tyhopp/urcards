import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
// import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'

// proj components
import DeckList from './components/DeckList'
import DeckCover from './components/DeckCover'
import DeckCreator from './components/DeckCreator'
import CardCreator from './components/CardCreator'
import Quiz from './components/Quiz'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNav />
      </View>
    );
  }
}

const RootNav = StackNavigator({ // RootNav renders like a component, with Home as default
  Home: {
    screen: DeckList,
  },
  DeckCover: {
    screen: DeckCover,
  },
  DeckCreator: {
    screen: DeckCreator,
  },
  CardCreator: {
    screen: CardCreator,
  },
  Quiz: {
    screen: Quiz,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
