import axios from "axios";

function authentication(email_add, auth_num) {
  return async (dispatch, getState) => {
    const authen = await axios({
      method: "post",
      url: "http://15.165.17.118/authentication",
      data: {
        email_add,
        auth_num,
      },
    });
    console.log("사인업액션");
    console.log(authen.data);
    let auth_go = authen.data;
    if (authen.data) {
      dispatch({ type: "AUTHEN", payload: { auth_go } });
      alert("이메일 전송");
    } else {
      alert("이미 가입된 메일입니다.");
    }
  };
}

function sign(user_id, user_pw, user_nickName, user_phone) {
  return async (dispatch, getState) => {
    const sign_up = await axios({
      method: "post",
      url: "http://15.165.17.118/sign",
      data: {
        user_id,
        user_pw,
        user_nickName,
        user_phone,
      },
    });
    if (sign_up.data) {
      dispatch({
        type: "SIGNUP",
        payload: { user_id, user_pw, user_nickName, user_phone },
      });
    } else {
      alert("중복된 닉네임");
    }
  };
}

export const sign_func = { authentication, sign };
