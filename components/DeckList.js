import React, { Component } from "react"
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { StackNavigator } from "react-navigation"
import { getDecks } from '../actions'
import { offWhite, darkTeal } from '../utils/colors'
import { connect } from 'react-redux'


// components
import DeckListItem from './DeckListItem'
import DeckListItemCreator from './DeckListItemCreator'

class DeckList extends Component {

  render() {
    const { navigate } = this.props.navigation
    const { decks } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('DeckCreator')}>
          <DeckListItemCreator />
        </TouchableOpacity>
        <FlatList
          data={decks}
          keyExtractor={item => item.deckId}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigate('DeckCover', {deck: item})}>
              <DeckListItem deck={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: offWhite,
  },
  h1: {
    fontFamily: "Avenir-Black",
    fontSize: 26,
    color: darkTeal
  }
});

function mapStateToProps(state) {
  return {
    decks: Object.values(state.decks)
  }
}


export default connect(mapStateToProps)(DeckList)