import axios from "axios";

function reservation_check(user_id) {
  return async (dispatch, getState) => {
    const _reservCheck = await axios({
      method: "post",
      url: "http://15.165.17.118/reservationcheck",
      data: { user_id },
    });
  };
}

function reservation_active(user_id) {
  return async (dispatch, getState) => {
    const _active = await axios({
      method: "post",
      url: "http://15.165.17.118/reservationactive",
      data: {},
    });
  };
}

export const reserv_func = { reservation_check, reservation_active };
