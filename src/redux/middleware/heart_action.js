import axios from "axios";

function heartCheck(user_id) {
  return async (dispatch, getState) => {
    const _heartCheck = await axios({
      method: "POST",
      url: "http://15.165.17.118/heartcheck",
      data: { user_id },
    });
    let like_resion = _heartCheck.data;
    if (_heartCheck.data) {
      dispatch({ type: "HEART_CHECK", payload: { like_resion } });
    }
  };
}
function heartActive(resion_data, user_id) {
  return async (dispatch, getState) => {
    const _heartActive = await axios({
      method: "POST",
      url: "http://15.165.17.118/heartActive",
      data: { resion_data, user_id },
    });
    if (_heartActive) {
      // dispatch({ type: "HEART_ACTIVE", payload: resion_data });
    } else {
      console.log("좋아요 실패ㅠ");
    }
  };
}

function heartRemove(resion_data, user_id) {
  return async (dispatch, getState) => {
    const _heartRemove = await axios({
      method: "POST",
      url: "http://15.165.17.118/heartRemove",
      data: { resion_data, user_id },
    });
    if (_heartRemove) {
      // dispatch({ type: "HEART_REMOVE", payload: resion_data });
    } else {
      console.log("좋아요 취소 실패ㅠ");
    }
  };
}

export const heart_func = { heartCheck, heartActive, heartRemove };
