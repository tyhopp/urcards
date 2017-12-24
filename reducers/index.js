import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { 
	GET_DECKS,
	CREATE_DECK,
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
				[action.deckTitle]: {
					deckTitle: action.deckTitle,
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


