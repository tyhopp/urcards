import React, { Component } from "react"
import { Flatlist, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { StackNavigator } from "react-navigation"
import { getDecks } from '../actions'
import { offWhite, darkTeal } from '../utils/colors'
import { connect } from 'react-redux'


// components
import DeckListItem from './DeckListItem'
import DeckListItemCreator from './DeckListItemCreator'

class DeckList extends Component {

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
    const { navigate } = this.props.navigation
    navigate('DeckCover')
  };

  _renderItem = ({deck}) => (
    <DeckListItem
      id={deck.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(deck.id)}
      title={deck.decktitle}
    />
  );

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('DeckCreator')}>
          <DeckListItemCreator />
        </TouchableOpacity>
        <Flatlist 
          data={decks} 
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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