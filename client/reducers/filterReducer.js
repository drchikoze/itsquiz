let customersReducer = function(filter = {}, action) {
  switch (action.type) {
    //load movies
    case 'SET_NAME_FILTER':
      return Object.assign({}, filter, {
        nameFilter: action.value
      })
    case 'SET_ACTOR_FILTER':
      return Object.assign({}, filter, {
        actorFilter: action.value
      })
    default:
      return filter
  }
}
export default customersReducer
