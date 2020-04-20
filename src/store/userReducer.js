const INITIAL_STATE = {
  currentUser: null,
}

function userReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}

export default userReducer
