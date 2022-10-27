import axios from "axios";

function login(id, pw) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://15.165.17.118/login",
      data: {
        id,
        pw,
      },
    });
    let user_nick = user.data;
    if (user.data) {
      dispatch({ type: "LOGIN", payload: { id, pw, user_nick } });
    } else {
      alert("아이디없음.");
    }
  };
}
function logout() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT" });
  };
}

export const login_func = { login, logout };
