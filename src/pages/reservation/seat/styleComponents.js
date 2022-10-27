import styled from "styled-components";

const Seat_pageWrap = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.8);
  /* position: relative; */
`;

const Seat_title = styled.h1`
  /* border: 1px solid orange; */
  width: 100%;
  height: 50px;
  color: white;
  text-align: center;
`;

const Seat_contentsWrap = styled.div`
  border: 1px solid yellow;
  border-radius: 10px;
  width: 1200px;
  height: 550px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Seat_rowWrap = styled.div`
  /* border: 1px solid violet; */
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

const Seat_colWrap = styled.div`
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: row;
  margin: 8px;
  justify-content: space-evenly;
`;

const Seat_wrap = styled.div`
  background-color: ${(props) =>
    props.bgColor == 0 ? "gray" : props.bgColor == 1 ? "yellowgreen" : "red"};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  /* border: 1px solid blue; */
  display: flex;
  height: 28px;
  width: 28px;
`;
const Seat_shape = styled.div`
  /* border: 1px solid pink; */
`;

const Seat_num = styled.div`
  /* border: 1px solid green; */
  color: bisque;
`;

const Seat_closeBtn = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  background-color: orange;
  top: 10px;
  left: 1160px;
`;

const Seat_saveBtn = styled.button`
  margin: 10px;
  width: 500px;
  height: 30px;
  border-radius: 10px;
  background-color: orange;
  color: white;
  font-size: 18px;
`;

export {
  Seat_pageWrap,
  Seat_title,
  Seat_contentsWrap,
  Seat_rowWrap,
  Seat_colWrap,
  Seat_wrap,
  Seat_shape,
  Seat_num,
  Seat_closeBtn,
  Seat_saveBtn,
};
