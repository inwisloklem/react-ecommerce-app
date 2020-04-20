import {applyMiddleware, createStore} from 'redux'
import reduxLogger from 'redux-logger'
import rootReducer from 'store/rootReducer'

const store = createStore(rootReducer, applyMiddleware(reduxLogger))

export default store
