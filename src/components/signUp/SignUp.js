import React from "react";
import { SignContents } from "../sign/styledComponents";
import {
  SignUpWrap,
  SignUpContents,
  Label,
  Span,
  SignUpInput,
  SignUpBtn,
} from "./styledComponents";

const SignUp = ({
  sign_up_id,
  signInput_pw,
  signInput_pw_check,
  signInput_nickName,
  signInput_phone,
  sign_up,
}) => {
  return (
    <SignUpWrap>
      <Label>회원정보 입력</Label>
      <SignContents>
        <label>아 이 디 :</label>
        <Span>{sign_up_id}</Span>
      </SignContents>
      <SignUpContents>
        <label>닉 네 임 :</label>
        <SignUpInput
          type="text"
          placeholder="닉네임 입력"
          ref={signInput_nickName}
          onChange={(e) => {
            signInput_nickName.value = e.target.value;
          }}
        ></SignUpInput>
      </SignUpContents>
      <SignUpContents>
        <label>비밀번호 :</label>
        <SignUpInput
          type="text"
          placeholder="비밀번호 입력"
          ref={signInput_pw}
          onChange={(e) => {
            signInput_pw.value = e.target.value;
          }}
        ></SignUpInput>
      </SignUpContents>
      <SignUpContents>
        <label>비번확인 :</label>
        <SignUpInput
          type="text"
          placeholder="비밀번호 확인"
          ref={signInput_pw_check}
          onChange={(e) => {
            signInput_pw_check.value = e.target.value;
          }}
        ></SignUpInput>
      </SignUpContents>
      <SignUpContents>
        <label>전화번호 :</label>
        <SignUpInput
          type="text"
          placeholder="휴대폰번호 입력"
          ref={signInput_phone}
          onChange={(e) => {
            signInput_phone.value = e.target.value;
          }}
        ></SignUpInput>
      </SignUpContents>
      <SignUpBtn onClick={sign_up}>확 인</SignUpBtn>
    </SignUpWrap>
  );
};

export default SignUp;
