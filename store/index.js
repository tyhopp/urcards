import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage' // AsyncStorage
import reducers from '../reducers'

const config = {
  key: 'root',
  storage,
}

const reducer = persistReducer(config, reducers) // combined reducers object
export const store = createStore(reducer, composeWithDevTools()) // add remote redux tools
export const persistor = persistStore(store)
