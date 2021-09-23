const flatsReducer = (state, action) => {
  // Reducer initialization
  if (state === undefined) {
    return [];
  }

  // Handle actions
  switch (action.type) {
    case "SET_FLATS":
      // if action is SET_FLATS, return new state (=action.payload) of flats
      return action.payload;
    default:
      // return current state if no action matches
      return state;
  }
};

export default flatsReducer;
