export const CREATE_DECK = 'CREATE_DECK'
export const GET_DECKS = 'GET_DECKS'

export function getDecks(decks) {
	return {
		type: GET_DECKS,
		decks
	}
}
export function createDeck(deck) {
	return {
		type: CREATE_DECK,
		deck
	}
}