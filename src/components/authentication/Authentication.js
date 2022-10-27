import React from "react";
import {
  AuthWrap,
  AuthContents,
  Label,
  AuthInput,
  AuthBtn,
} from "./styledComponents";

const Authentication = ({ authInput, auth_up }) => {
  return (
    <AuthWrap>
      <Label>인증하기</Label>
      <AuthContents>
        <AuthInput
          type="text"
          placeholder="인증번호 입력"
          ref={authInput}
          onChange={(e) => {
            authInput.value = e.target.value;
          }}
        ></AuthInput>
      </AuthContents>
      <AuthBtn onClick={auth_up}>확 인</AuthBtn>
    </AuthWrap>
  );
};

export default Authentication;
