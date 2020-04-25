import {ADD_ITEM_TO_CART, TOGGLE_CART_DROPDOWN} from 'store/types'

const INITIAL_STATE = {
  cartItems: [],
  isDropdownHidden: true,
}

function cartReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case ADD_ITEM_TO_CART: {
      const index = state.cartItems.findIndex(item => item.id === payload.id)

      if (index > -1) {
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[index].quantity += 1

        return {
          ...state,
          cartItems: updatedCartItems,
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems, {...payload, quantity: 1}],
      }
    }
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
