import { combineReducers } from 'redux'
import { GET_DECKS } from '../actions'



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

function decks(state = initialState, action) {
	switch(action.type){
		case GET_DECKS :
			return {
				...state,
			}
		default :
			return state
	}
}

const reducer = combineReducers({ 
	decks,
})




export default reducer


