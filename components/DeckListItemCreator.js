import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { offWhite, darkTeal, lightGray } from "../utils/colors";
import { MaterialIcons } from '@expo/vector-icons'

export default function DeckListItemCreator({  }) {
  return (
    <View style={styles.deckContainer}>
      <View style={styles.deckCreatorAlign}>
        <View style={{ paddingRight: 6 }}>
          <MaterialIcons name='add-circle-outline' size={30} color={darkTeal}/>
        </View>
        <Text style={styles.deckCreatorText}>
          Create deck
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deckContainer: {
    backgroundColor: offWhite,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: darkTeal,
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  deckCreatorAlign: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  deckCreatorText: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 24,
    color: darkTeal,
  },
});
