import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { TabNavigator, StackNavigator } from 'react-navigation'
// import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { offWhite, teal, darkTeal, gray } from "../utils/colors";

export default class QuizCardBack extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <View style={[styles.flex3, styles.center]}>
          <View style={styles.bigQuestionAlign}>
            <Text style={styles.bigQuestion}>
              Does Udacity offer a course on service workers and PWAs?
            </Text>
          </View>
        </View>
        <View style={styles.flex2}>
          <TouchableOpacity style={styles.buttonA} onPress={() => navigate('CardCreator')}>
            <Text style={styles.buttonTextA}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonB} onPress={() => navigate('Quiz')}>
            <Text style={styles.buttonTextB}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
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
  bigQuestionAlign: {
    margin: 20,
  },
  bigQuestion: {
    fontFamily: 'Avenir-Black',
    fontSize: 32,
    color: darkTeal,
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
