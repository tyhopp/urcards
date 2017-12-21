import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { offWhite, teal, darkTeal, gray } from "../utils/colors";

export default function DeckListItem({  }) {
  return (
    <View style={styles.deckContainer}>
      <View style={styles.deckTitleAlign}>
        <Text style={styles.deckTitle}>
          Deck
        </Text>
      </View>
      <View style={styles.cardCountAlign}>
        <Text style={styles.cardCount}>
          X Cards
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: teal,
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  deckTitleAlign: {
    marginBottom: 10,
  },
  deckTitle: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    color: darkTeal,
  },
  cardCountAlign: {

  },
  cardCount: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16,
    color: gray,
  },
});
