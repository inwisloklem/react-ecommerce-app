import {
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CURRENT_USER,
  TOGGLE_CART_DROPDOWN,
} from 'store/types'

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  }
}

export function clearItemFromCart(id) {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: id,
  }
}

export function removeItemFromCart(item) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  }
}

export function toggleCartDropdown() {
  return {
    type: TOGGLE_CART_DROPDOWN,
  }
}
