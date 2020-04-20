import {SET_CURRENT_USER, TOGGLE_CART_DROPDOWN} from 'store/types'

export function toggleCartDropdown() {
  return {
    type: TOGGLE_CART_DROPDOWN,
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  }
}
