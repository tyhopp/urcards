import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { 
	GET_DECKS,
	CREATE_DECK,
	ADD_CARD,
} from '../actions'


/* STATE SHAPE
const initialState = {
  deck: {
    deckTitle: '',
    deckQuestions: [
      {
        cardQuestion: '',
        cardAnswer: ''
      }
    ]
  }
}
*/

function decks(state = [], action) {
	const { payload } = action

	switch(action.type){
		case GET_DECKS :
			return {
				...state,
			}
		case CREATE_DECK :
			return {
				...state,
				[action.deckTitle]: {
					deckId: action.deckId,
					deckTitle: action.deckTitle,
					deckQuestions: [],
				}
			}
		case ADD_CARD :
			const deck = state[payload.deck] // lookup correct deck
			return {
				...state,
				[payload.deck]: {
					...deck,
					deckQuestions: deck.deckQuestions.concat(payload.deckQuestions),
				}
			}
		default :
			return state
	}
}

const reducers = combineReducers({ 
	decks,
	form: formReducer,
})


export default reducers


