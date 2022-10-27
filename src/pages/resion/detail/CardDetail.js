import React from "react";
import {
  Detail_wrap,
  Contents_wrap,
  Contents_left,
  Constents_img,
  Contents_right,
  Contents_title,
  Contents_info,
  Contents_text,
  Contents_closeBtn,
  Contents_reservBtn,
} from "./styledComponents";

const CardDetail = ({ value, setActive }) => {
  console.log(value);
  return (
    <Detail_wrap>
      <Contents_wrap>
        <Contents_left>
          <Constents_img src={`./images/${value.img}`} />
        </Contents_left>
        <Contents_right>
          <Contents_title>{value.title}</Contents_title>
          <Contents_info>
            <p style={{ color: "pink", display: "inline" }}>나라</p> :{" "}
            {value.country}
          </Contents_info>
          <Contents_info>
            <p style={{ color: "pink", display: "inline" }}>지역</p> :{" "}
            {value.location}
          </Contents_info>
          <Contents_text>
            <p style={{ color: "pink", display: "inline" }}>소개</p> <br />
            {value.contents}
          </Contents_text>
          <Contents_reservBtn>여행가기</Contents_reservBtn>
        </Contents_right>
      </Contents_wrap>
      <Contents_closeBtn
        onClick={() => {
          setActive(false);
        }}
      >
        X
      </Contents_closeBtn>
    </Detail_wrap>
  );
};

export default CardDetail;
