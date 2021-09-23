const selectedFlatsReducer = (state, action) => {
  // Reducer initialization
  if (state === undefined) {
    return null;
  }

  // Handle actions
  switch (action.type) {
    case "SELECT_FLAT":
      // if action is SET_FLATS, return new state (=action.payload) of flats
      return action.payload;
    default:
      // return current state if no action matches
      return state;
  }
};

export default selectedFlatsReducer;
