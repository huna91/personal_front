import React, { useEffect, useRef, useState } from "react";
import travel_data from "./travle_data.json";
import {
  ResionWrap,
  ResionLeft,
  Left_contents_wrap,
  Check_wrap,
  Check_title,
  Check_input,
  Check_btn,
  ResionRight,
  Right_contents_wrap,
} from "./styledComponents";
import CardComponent from "./CardComponent";
import { useDispatch, useSelector } from "react-redux";

const Resion = () => {
  // 좋아요 데이터
  const like = useSelector((state) => state.heart_reducer.liked_resion);
  const dispatch = useDispatch();
  let like_data = [];

  useEffect(() => {
    like_data = like.like_resion;
  }, [like]);

  function like_go() {
    console.log(like);
  }
  console.log(like_data);
  console.log(like.like_resion);

  // 세부내용 보기
  const [detail, setDetail] = useState();

  return (
    <ResionWrap>
      <ResionLeft className="resion_left">
        <Left_contents_wrap>
          <Check_title>나라별 검색</Check_title>
          {travel_data.card_data.map((value, index) => {
            return (
              <Check_wrap>
                <Check_input
                  type="checkbox"
                  value={`${value.country}`}
                ></Check_input>
                {value.country}
              </Check_wrap>
            );
          })}
          <Check_btn onClick={like_go}>검 색</Check_btn>
        </Left_contents_wrap>
      </ResionLeft>
      <ResionRight className="resion_right">
        <Right_contents_wrap>
          {travel_data.card_data.map((value, index) => {
            let heart_tf_data = false;
            like.like_resion.find((data) => data == index)
              ? (heart_tf_data = true)
              : (heart_tf_data = false);
            return (
              <CardComponent
                onOff={heart_tf_data}
                value={value}
                index={index}
              ></CardComponent>
            );
          })}
        </Right_contents_wrap>
      </ResionRight>
    </ResionWrap>
  );
};

export default Resion;
