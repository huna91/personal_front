const init = {
  laces: "",
  mesh: "",
  caps: "",
  inner: "",
  sole: "",
  stripes: "",
  band: "",
  patch: "",
};

function shoes_reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "SHOES_COLOR":
      return {
        ...state,
        laces: payload.laces,
        mesh: payload.mesh,
        caps: payload.caps,
        inner: payload.inner,
        sole: payload.sole,
        stripes: payload.stripes,
        band: payload.band,
        patch: payload.patch,
      };

    default:
      return state;
  }
}

export default shoes_reducer;
