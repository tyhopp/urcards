import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { offWhite, darkTeal, lightGray } from "../utils/colors";
import { cardCount } from '../utils/helpers'

export default function DeckListItem({ deck }) {

  return (
    <View style={styles.deckContainer}>
      <View style={styles.deckTitleAlign}>
        <Text style={styles.deckTitle}>
          {deck.deckTitle}
        </Text>
      </View>
      <View style={styles.cardCountAlign}>
        <Text style={styles.cardCount}>
          {cardCount(deck)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    backgroundColor: darkTeal,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  deckTitleAlign: {
    marginBottom: 6,
  },
  deckTitle: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 24,
    color: offWhite,
  },
  cardCount: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color: lightGray,
  },
});
