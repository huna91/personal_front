const init = {
  auth_go: 0,
  user_id: "",
  user_pw: "",
  user_nickName: "",
  user_phone: "",
};

function sign_reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "AUTHEN":
      return { ...state, auth_go: payload.auth_go };

    case "SIGNUP":
      return {
        ...state,
        user_id: payload.user_id,
        user_pw: payload.user_pw,
        user_nickName: payload.user_nickName,
        user_phone: payload.user_phone,
      };

    default:
      return state;
  }
}

export default sign_reducer;
