import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { offWhite, darkTeal, gray } from "../utils/colors";

export default class QuizResult extends Component {
  render() {
const { navigate, score, deck } = this.props // from parent component


    return (
      <View style={styles.container}>
        <View style={[styles.flex3, styles.center]}>
          <View style={styles.resultAlign}>
            <Text style={styles.result}>
              {score} out of {deck.deckQuestions.length} questions answered correctly.
            </Text>
          </View>
        </View>
        <View style={styles.flex2}>
          <TouchableOpacity style={styles.buttonToDeckCover} onPress={() => navigate('DeckCover', {receivedDeckTitle: deck.deckTitle})}>
            <Text style={styles.buttonTextToDeckCover}>Back to deck</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRestartQuiz} onPress={() => navigate('Quiz', {deck: deck})}>
            <Text style={styles.buttonTextRestartQuiz}>Restart quiz</Text>
          </TouchableOpacity>
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
  cardNumber: {
    color: gray,
  },
  resultAlign: {
    margin: 15,
  },
  result: {
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    textAlign: 'center',
    color: darkTeal,
  },
  smallAnswer: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color: gray,
  },
  buttonCorrect: {
    backgroundColor: offWhite,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: darkTeal,
  },
  buttonToDeckCover: {
    backgroundColor: offWhite,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextToDeckCover: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: darkTeal,
  },
  buttonRestartQuiz: {
    backgroundColor: darkTeal,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextRestartQuiz: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: offWhite,
  }
});
