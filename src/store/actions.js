import {SET_CURRENT_USER} from 'store/types'

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  }
}
