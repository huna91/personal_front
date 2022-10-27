import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Right_contents,
  Contents_img_wrap,
  Contents_img,
  ContentsData_wrap,
  ContentsData,
  Contents_title,
  Contents_button,
  Contents_love,
} from "./styledComponents";
import { heart_func } from "../../redux/middleware";
import CardDetail from "./detail/CardDetail";

const CardComponent = ({ onOff, value, index }) => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.login_reducer);
  const heart_data = useSelector((state) => state.heart_reducer.liked_resion);
  console.log(user_data);

  // 하트 컨트롤
  // const check_heart = useRef(false);
  const [heart, setHeart] = useState(onOff);
  function active_heart(resion) {
    heart
      ? dispatch(heart_func.heartRemove(resion, user_data.user_id))
      : dispatch(heart_func.heartActive(resion, user_data.user_id));
    setHeart(!heart);
  }

  useEffect(() => {}, []);
  // 세부내용 보러가기
  const [active, setActive] = useState(false);
  function go_detail() {
    setActive(!active);
  }
  return (
    <Right_contents>
      {active ? (
        <CardDetail value={value} setActive={setActive}></CardDetail>
      ) : (
        <></>
      )}
      <Contents_img_wrap>
        <Contents_img src={`./images/${value.img}`} />
      </Contents_img_wrap>
      <ContentsData_wrap>
        <ContentsData>
          <Contents_title>{value.title}</Contents_title>
          <Contents_button onClick={go_detail}>보러가기</Contents_button>
          <Contents_love
            onOff={heart}
            onClick={() => {
              active_heart(index);
            }}
            key={index}
          />
        </ContentsData>
      </ContentsData_wrap>
    </Right_contents>
  );
};

export default CardComponent;
