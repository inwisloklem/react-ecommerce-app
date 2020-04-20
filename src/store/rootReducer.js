import {combineReducers} from 'redux'
import userReducer from 'store/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer
