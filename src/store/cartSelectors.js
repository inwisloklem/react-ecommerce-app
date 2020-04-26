import {createSelector} from 'reselect'

const getCart = state => state.cart

export const getCartItems = createSelector([getCart], cart => cart.cartItems)
export const getIsDropdownHidden = createSelector([getCart], cart => cart.isDropdownHidden)
export const getTotal = createSelector([getCartItems], cartItems =>
  cartItems.reduce((total, {price, quantity}) => {
    return total + (quantity * price)
  }, 0),
)
export const getQuantity = createSelector([getCartItems], cartItems =>
  cartItems.reduce((quantity, item) => {
    return quantity + item.quantity
  }, 0),
)
