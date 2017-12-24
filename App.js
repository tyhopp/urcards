import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/es/integration/react'

// proj components
import DeckList from './components/DeckList'
import DeckCover from './components/DeckCover'
import DeckCreator from './components/DeckCreator'
import CardCreator from './components/CardCreator'
import Quiz from './components/Quiz'



export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <RootNav />
          </View>
        </PersistGate>
      </Provider>
    )
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

