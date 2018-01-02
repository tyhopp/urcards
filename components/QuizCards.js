import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { offWhite, darkTeal, gray, correctGreen, incorrectRed } from "../utils/colors"
import { cardNumber } from '../utils/helpers'


export default class QuizCards extends Component {
  constructor(props) {
    super(props);
    this._liftUpHandleCorrect = this._liftUpHandleCorrect.bind(this);
    this._liftUpHandleIncorrect = this._liftUpHandleIncorrect.bind(this);
    this.state = {
      currentCard: 0,
      score: 0,
      showAnswer: false,
    }
  }

  _liftUpHandleCorrect() {
    this.props._handleCorrect()
    this.setState({ showAnswer: false })
  }
  _liftUpHandleIncorrect() {
    this.props._handleIncorrect()
    this.setState({ showAnswer: false })
  }


  render() {
    const { navigate } = this.props.navigation
    const { deckQuestions } = this.props.navigation.state.params.deck
    const { showAnswer } = this.state
    const { currentCard, score } = this.props

    if (currentCard !== deckQuestions.length) { // show quiz card
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Text style={styles.goHome}>BACK TO DECKS</Text>
          </TouchableOpacity>
          <View style={[styles.flex3, styles.center]}>
            <View>
              <Text style={styles.cardNumber}>
                {cardNumber(currentCard)} / {deckQuestions.length}
              </Text>
            </View>
            <View style={styles.bigQuestionAlign}>
              <Text style={styles.bigQuestion}>
                { showAnswer 
                  ? Object.values(deckQuestions[currentCard].cardAnswer)
                  : Object.values(deckQuestions[currentCard].cardQuestion)
                }
              </Text>
            </View>
            { showAnswer
              ? <TouchableOpacity style={styles.smallAnswerAlign} onPress={() => this.setState({ showAnswer: false })}>
                  <Text style={styles.smallAnswer}>
                    See question
                  </Text>
                </TouchableOpacity>
              : <TouchableOpacity style={styles.smallAnswerAlign} onPress={() => this.setState({ showAnswer: true })}>
                  <Text style={styles.smallAnswer}>
                    See answer
                  </Text>
                </TouchableOpacity>
            }
          </View>
          <View style={styles.flex2}>
            <TouchableOpacity style={styles.buttonCorrect} onPress={() => this._liftUpHandleCorrect()}>
              <Text style={styles.buttonTextCorrect}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonIncorrect} onPress={() => this._liftUpHandleIncorrect()}>
              <Text style={styles.buttonTextIncorrect}>Incorrect</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
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
