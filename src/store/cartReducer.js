import {
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART_DROPDOWN,
} from 'store/types'

const INITIAL_STATE = {
  cartItems: [],
  isDropdownHidden: true,
}

function cartReducer(state = INITIAL_STATE, {type, payload}) {
  const {cartItems, isDropdownHidden} = state

  switch (type) {
    case ADD_ITEM_TO_CART: {
      const index = cartItems.findIndex(item => item.id === payload.id)

      if (index > -1) {
        const updatedCartItems = [...cartItems]
        updatedCartItems[index].quantity += 1

        return {
          ...state,
          cartItems: updatedCartItems,
        }
      }

      return {
        ...state,
        cartItems: [...cartItems, {...payload, quantity: 1}],
      }
    }
    case CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: cartItems.filter(item => item.id !== payload),
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      const index = cartItems.findIndex(item => item.id === payload.id)

      if (index > -1) {
        const {quantity} = cartItems[index]
        const updatedCartItems = [...cartItems]

        if (quantity > 1) {
          updatedCartItems[index].quantity -= 1
        }
        else {
          updatedCartItems.splice(index, 1)
        }

        return {
          ...state,
          cartItems: updatedCartItems,
        }
      }

      return state
    }
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isDropdownHidden: !isDropdownHidden,
      }
    default:
      return state
  }
}

export default cartReducer
