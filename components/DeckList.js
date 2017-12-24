import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { StackNavigator } from "react-navigation"
import { getDecks } from '../actions'
import { offWhite, darkTeal } from '../utils/colors'
import { connect } from 'react-redux'


// components
import DeckListItem from './DeckListItem'
import DeckListItemCreator from './DeckListItemCreator'

class DeckList extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('DeckCover')}>
          <DeckListItem />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('DeckCreator')}>
          <DeckListItemCreator />
        </TouchableOpacity>
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


export default connect()(DeckList)