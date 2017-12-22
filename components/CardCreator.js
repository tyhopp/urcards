import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import reducer from './reducers'
import { offWhite, darkTeal, gray, correctGreen, incorrectRed } from "../utils/colors";

export default class CardCreator extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={[styles.flex1, styles.center]}>
          <View style={styles.cardQuestionAlign}>
            <Text style={styles.cardQuestion}>
              Question
            </Text>
          </View>
          <TouchableOpacity style={styles.smallAnswerAlign}>
            <Text style={styles.smallAnswer}>
              Insert form
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flex1, styles.center]}>
          <View style={styles.cardAnswerAlign}>
            <Text style={styles.cardAnswer}>
              Answer
            </Text>
          </View>
          <TouchableOpacity style={styles.smallAnswerAlign}>
            <Text style={styles.smallAnswer}>
              Insert form
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flex1, styles.center]}>
          <TouchableOpacity style={styles.buttonSubmit} onPress={() => navigate('CardCreator')}>
            <Text style={styles.buttonTextSubmit}>Submit</Text>
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
  flex1: {
    flex: 1,
  },
  cardNumber: {
    color: gray,
  },
  cardQuestionAlign: {
    margin: 15,
  },
  cardQuestion: {
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    textAlign: 'center',
    color: darkTeal,
  },
  cardAnswerAlign: {
    margin: 15,
  },
  cardAnswer: {
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
  buttonSubmit: {
    backgroundColor: offWhite,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextSubmit: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: darkTeal,
  },
});
