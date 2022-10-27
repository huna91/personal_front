import React from "react";
import {
  LoginWrap,
  LoginBtn,
  LoginInput,
  LoginContents,
} from "./styledComponents";

const Login = ({ idInput, pwInput, login_go }) => {
  return (
    <LoginWrap>
      <LoginContents>
        <label>아 이 디 : </label>
        <LoginInput
          ref={idInput}
          onChange={(e) => {
            idInput.value = e.target.value;
          }}
        ></LoginInput>
      </LoginContents>
      <LoginContents>
        <label>비밀번호 : </label>
        <LoginInput
          ref={pwInput}
          onChange={(e) => {
            pwInput.value = e.target.value;
          }}
        ></LoginInput>
      </LoginContents>
      <LoginBtn onClick={login_go}>입 력</LoginBtn>
    </LoginWrap>
  );
};

export default Login;
