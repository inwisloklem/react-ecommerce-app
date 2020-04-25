import {ADD_ITEM_TO_CART, SET_CURRENT_USER, TOGGLE_CART_DROPDOWN} from 'store/types'

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  }
}

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
