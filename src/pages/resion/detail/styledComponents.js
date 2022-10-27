import styled from "styled-components";

const Detail_wrap = styled.div`
  width: 1550px;
  height: 730px;
  background-color: rgba(100, 100, 100, 0.8);
  z-index: 4;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const Contents_wrap = styled.div`
  /* border: 1px solid red; */
  background-color: black;
  border-radius: 10px;
  box-shadow: inset 0 0 5px yellowgreen, inset 0 0 10px yellowgreen,
    inset 0 0 15px yellowgreen, inset 0 0 20px yellowgreen,
    inset 0 0 30px yellowgreen;
  width: 900px;
  height: 600px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents_left = styled.div`
  /* border: 1px solid blue; */
  width: 550px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

const Constents_img = styled.img`
  /* border: 1px solid green; */
  border-radius: 20px;
  width: 500px;
  height: 350px;
`;

const Contents_right = styled.div`
  /* border: 1px solid orange; */
  float: right;
  width: 345px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contents_title = styled.h1`
  /* border: 1px solid violet; */
  position: absolute;
  color: white;
  /* margin: 0; */
  top: 0px;
  left: 0px;
  width: 100%;
  height: 80px;
  padding-top: 20px;
  text-align: center;
`;

const Contents_info = styled.div`
  width: 300px;
  height: 50px;
  color: white;
`;

const Contents_text = styled.div`
  width: 300px;
  height: 200px;
  color: white;
`;

const Contents_closeBtn = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 5px;
  background-color: pink;
  color: black;
  top: 100px;
  left: 1150px;
`;

const Contents_reservBtn = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  background-color: orange;
  color: white;
  font-size: 20px;
  cursor: pointer;
  :hover {
    ::before {
      background-color: red;
    }
  }
  ::before {
    content: "GO";
    position: absolute;
    font-weight: 600;
    font-size: 30px;
    line-height: 80px;
    color: orange;
    background-color: orange;
    border-radius: 30px;
    width: 80px;
    height: 80px;
    left: 570px;
    top: 410px;
  }
`;

export {
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
};
