import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { offWhite, darkTeal, gray } from "../utils/colors"
import { connect } from 'react-redux'
import { getDeck } from '../actions'


class DeckCover extends Component {

  state = {
    deck: {},
  }

  componentWillMount() {
    const { receivedDeckTitle } = this.props.navigation.state.params // deck title from prior component
    const { decks } = this.props // list of decks from store
    decks.map((deck) => {
      if (deck.deckTitle === receivedDeckTitle) { // match selected deck
        this.setState({ deck: deck }) // sets selected deck
      }
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const { deck } = this.state

    return (
      <View style={styles.container}>
        <View style={[styles.flex3, styles.center]}>
          <Text style={styles.h1}>{deck.deckTitle}</Text>
          <Text style={styles.h3}>{(deck.deckQuestions.length > 0) ? deck.deckQuestions : '0'} Cards</Text>
        </View>
        <View style={styles.flex2}>
          <TouchableOpacity style={styles.buttonA} onPress={() => navigate('CardCreator', {deckTitle: deck.deckTitle})}>
            <Text style={styles.buttonTextA}>Add Card</Text>
          </TouchableOpacity>
          {(deck.deckQuestions.length > 0) &&
            <TouchableOpacity style={styles.buttonB} onPress={() => navigate('Quiz')}>
              <Text style={styles.buttonTextB}>Start Quiz</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: offWhite,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  h1: {
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    color: darkTeal,
  },
  h3: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color: gray,
    marginTop: 15,
  },
  buttonA: {
    backgroundColor: offWhite,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextA: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: darkTeal
  },
  buttonB: {
    backgroundColor: darkTeal,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextB: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: offWhite
  }
});

function mapStateToProps(state) {
  return {
    decks: Object.values(state.decks)
  }
}

export default connect(mapStateToProps)(DeckCover)
