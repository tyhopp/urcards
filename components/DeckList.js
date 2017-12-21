import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
import { StackNavigator } from "react-navigation";
// import reducer from './reducers'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { offWhite, teal, darkTeal } from "../utils/colors";

// components
import DeckListItem from './DeckListItem'

export default class DeckList extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <DeckListItem />
        <DeckListItem />
        <DeckListItem />
        <DeckListItem />
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
