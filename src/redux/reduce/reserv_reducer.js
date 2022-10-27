const init = {
  preData: false,
  data: {},
};

function reserv_reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "SEAT_RESERV":
      return {
        ...state,
        preData: true,
        data: payload,
      };

    default:
      return state;
  }
}

export default reserv_reducer;
