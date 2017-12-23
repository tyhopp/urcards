import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools, devToolsEnhancer } from 'remote-redux-devtools'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'

// proj components
import DeckList from './components/DeckList'
import DeckCover from './components/DeckCover'
import DeckCreator from './components/DeckCreator'
import CardCreator from './components/CardCreator'
import Quiz from './components/Quiz'

const logger = store => next => action => { 
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      logger
    )
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNav />
        </View>
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
