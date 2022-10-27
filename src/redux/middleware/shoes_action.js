import axios from "axios";

function shoesData(color, user_id) {
  return async (dispatch, getState) => {
    const _shoes_data = await axios({
      method: "POST",
      url: "http://15.165.17.118/shoesdata",
      data: { color, user_id },
    });
  };
}

function colorFind(user_id) {
  return async (dispatch, getState) => {
    const _colorFind = await axios({
      method: "POST",
      url: "http://15.165.17.118/colorfind",
      data: { user_id },
    });
    if (_colorFind) {
      dispatch({ type: "SHOES_COLOR", payload: _colorFind.data });
    } else {
    }
  };
}

export const shoes_func = { shoesData, colorFind };
