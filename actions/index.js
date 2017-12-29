import { uuid } from '../utils/helpers'

export const GET_DECKS = 'GET_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const ADD_CARD = 'ADD_CARD'

export function getDecks(decks) {
	return {
		type: GET_DECKS,
		decks 
	}
}

export function createDeck(values) {

	const { deckTitle } = values
	
	return {
		type: CREATE_DECK,
		deckId: uuid(),
		deckTitle,
	}
}

export function addCard(deckTitle, values) {

	const { cardQuestion, cardAnswer } = values

	return {
		type: ADD_CARD,
		payload: {
			deck: deckTitle,
			deckQuestions: [
				{
					cardQuestion,
					cardAnswer,
				}
			]
		}
	}
}