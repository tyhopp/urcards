import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { TabNavigator, StackNavigator } from 'react-navigation'
// import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { offWhite, teal, darkTeal } from "../utils/colors";

export default class DeckCover extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.h1}>You're in Deck Cover.</Text>
        <TouchableOpacity
          style={styles.buttonA}
          onPress={() => navigate("DeckCover")}
        >
          <Text style={styles.buttonTextA}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonB}
          onPress={() => navigate("DeckCover")}
        >
          <Text style={styles.buttonTextB}>Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    alignItems: "center",
    justifyContent: "center"
  },
  h1: {
    fontFamily: "Avenir-Black",
    fontSize: 26,
    color: "#42A590"
  },
  buttonA: {
    backgroundColor: offWhite,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50
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
    paddingHorizontal: 50
  },
  buttonTextB: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: offWhite
  }
});
