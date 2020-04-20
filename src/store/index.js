import {applyMiddleware, createStore, compose} from 'redux'
import reduxLogger from 'redux-logger'
import rootReducer from 'store/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxLogger)))

export default store
