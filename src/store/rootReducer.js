import {combineReducers} from 'redux'
import cartReducer from 'store/cartReducer'
import userReducer from 'store/userReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

export default rootReducer
