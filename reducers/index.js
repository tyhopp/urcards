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
	switch(action.type){
		case GET_DECKS :
			return {
				...state,
			}
		case CREATE_DECK :
			return {
				...state,
				[action.deckId]: {
					deckId: action.deckId,
					deckTitle: action.deckTitle,
					deckQuestions: [],
				}
			}
		case ADD_CARD :
			return {
				...state,
				[action.parentId]: {
					deckQuestions: [
						{
							cardQuestion: action.cardQuestion,
							cardAnswer: action.cardAnswer,
						}
					]
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


