const init = {
  liked_resion: [],
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "HEART_CHECK":
      return { ...state, liked_resion: payload };
    case "HEART_ACTIVE":
      return { ...state, liked_resion: payload };

    default:
      return state;
  }
}

export default reducer;
