const init = {
  isLogin: false,
  user_id: "",
  user_pw: "",
  user_nickName: "",
};
function login_reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
        user_id: payload.id,
        user_pw: payload.pw,
        user_nickName: payload.user_nick,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        user_id: "",
        user_pw: "",
        user_nickName: "",
      };

    default:
      return state;
  }
}

export default login_reducer;
