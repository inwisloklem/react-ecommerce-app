import {HIDE_CART_DROPDOWN, SHOW_CART_DROPDOWN, TOGGLE_CART_DROPDOWN} from 'store/types'

const INITIAL_STATE = {
  isDropdownHidden: true,
}

function cartReducer(state = INITIAL_STATE, {type}) {
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isDropdownHidden: !state.isDropdownHidden,
      }
    default:
      return state
  }
}

export default cartReducer
