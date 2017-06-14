function categories (state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_CATEGORIES':
      return action.categories
    default:
      return state
  }
}

export default categories
