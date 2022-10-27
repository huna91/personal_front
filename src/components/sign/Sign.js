import React from "react";
import {
  SignWrap,
  SignContents,
  Label,
  SignInput,
  SignBtn,
  Sign_img_wrap,
  Sign_Img_box,
} from "./styledComponents";
import { img_kakao, img_naver, img_google } from "../../images";

const Sign = ({ emailInput, sign_go }) => {
  return (
    <SignWrap>
      <Label>이메일 인증</Label>
      <SignContents>
        <SignInput
          type="text"
          placeholder="인증받을 메일주소 입력"
          ref={emailInput}
          onChange={(e) => {
            emailInput.value = e.target.value;
          }}
        ></SignInput>
      </SignContents>
      <SignBtn onClick={sign_go}>전 송</SignBtn>
      <Sign_img_wrap>
        <Sign_Img_box src={img_google} />
        <Sign_Img_box src={img_naver} />
        <Sign_Img_box src={img_kakao} />
      </Sign_img_wrap>
    </SignWrap>
  );
};

export default Sign;
