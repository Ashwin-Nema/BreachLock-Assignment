import reducers from '../Reducers'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'

const middlewares = [thunk]

const allmiddlewares = applyMiddleware(...middlewares)

export const store = createStore(reducers, allmiddlewares)
export const persistor = persistStore(store)