import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { offWhite, darkTeal, gray, correctGreen, incorrectRed } from "../utils/colors"
import { cardNumber } from '../utils/helpers'
import QuizCards from './QuizCards'
import QuizResult from './QuizResult'


class Quiz extends Component {
  constructor(props) {
    super(props);
    this._handleCorrect = this._handleCorrect.bind(this);
    this._handleIncorrect = this._handleIncorrect.bind(this);
    this.state = {
      currentCard: 0,
      score: 0,
    }
  }

  _handleCorrect(){
    this.setState({ 
      currentCard: this.state.currentCard + 1,
      score: this.state.score + 1,
    })
  }

  _handleIncorrect(){
    this.setState({ 
      currentCard: this.state.currentCard + 1,
      // don't change score
    })
  }

  render() {
    const { navigation } = this.props
    const { deckQuestions } = this.props.navigation.state.params.deck 
    const { currentCard, score } = this.state

    if (currentCard === deckQuestions.length) { // show quiz result
      return (
        <QuizResult 
          navigation={navigation}
          score={score}
        />
      )
    } else {
      return (
        <QuizCards 
          navigation={navigation}
          currentCard={currentCard}
          score={score}
          _handleCorrect={this._handleCorrect}
          _handleIncorrect={this._handleIncorrect}
        />
      )
    }
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
  goHome: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14,
    color: gray,
    marginTop: 20,
  },
  cardNumber: {
    color: gray,
  },
  bigQuestionAlign: {
    margin: 15,
  },
  bigQuestion: {
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
  buttonCorrect: {
    backgroundColor: correctGreen,
    borderColor: correctGreen,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextCorrect: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: offWhite,
  },
  buttonIncorrect: {
    backgroundColor: incorrectRed,
    borderColor: incorrectRed,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextIncorrect: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: offWhite,
  }
});


export default Quiz
