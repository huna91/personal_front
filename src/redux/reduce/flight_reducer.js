let init = {
  flightData: {},
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_FLIGHT_DATA":
      return { ...state, flightData: payload };

    default:
      return state;
  }
}

export default reducer;
