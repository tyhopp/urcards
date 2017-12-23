import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = '@Urcards:decks'

export function getDecks() { // return all decks data

}

export function getDeck(deckId) { // get single deck from id

}

export function saveDeckTitle(deckTitle) { // save deck by title
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
		[key]: deckTitle, 
	}))
}

export function addCardToDeck({ cardTitle, card }) { // add card to specific deck

}
