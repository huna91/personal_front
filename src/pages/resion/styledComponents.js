import styled from "styled-components";

const ResionWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ResionLeft = styled.div`
  width: 350px;
  height: 100vh;
  /* border: 1px solid yellow; */
  position: relative;
`;

const Left_contents_wrap = styled.div`
  width: 280px;
  height: 75vh;
  border: 2px solid yellow;
  border-radius: 15px;
  position: absolute;
  top: 130px;
  left: 35px;
  display: flex;
  flex-direction: column;
`;

const Check_wrap = styled.div`
  color: white;
  margin: 5px 30px;
`;

const Check_title = styled.h1`
  margin-left: 70px;
  color: white;
`;

const Check_input = styled.input``;

const Check_btn = styled.button`
  margin-left: 50px;
  width: 180px;
  height: 40px;
  border-radius: 15px;
  margin-top: 30px;
  color: white;
  background-color: gray;
  font-size: 20px;
  cursor: pointer;
`;

const ResionRight = styled.div`
  width: calc(100% - 350px);
  height: 100vh;
  /* border: 1px solid red; */
  position: relative;
`;

const Right_contents_wrap = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 80vh;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 15vh;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background: rgba(227, 249, 123, 0.3);
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: palevioletred;
    border-radius: 6px;
    width: 10px;
    height: 20%;
  }
`;

const Right_contents = styled.div`
  border: 2px solid yellowgreen;
  border-radius: 10px;
  width: 300px;
  height: 360px;
  margin: 20px;
  position: relative;
`;

const Contents_img_wrap = styled.div`
  /* border: 1px solid white; */
  width: 88%;
  height: 50%;
  position: absolute;
  top: 5%;
  left: 6%;
`;

const Contents_img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ContentsData_wrap = styled.div`
  border-bottom: 2px solid orange;
  border-left: 2px solid orange;
  border-right: 2px solid orange;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: content-box;
  position: absolute;
  top: 58%;
  left: -2px;
  width: 300px;
  height: 150px;
`;

const ContentsData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents_title = styled.div`
  color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-top: 3px solid pink;
  margin-top: 5px;
  width: 320px;
  height: 80px;
`;

const Contents_button = styled.button`
  width: 130px;
  height: 30px;
  margin-top: 10px;
  position: absolute;
  top: 90px;
  color: white;
  font-size: 15px;
  border-radius: 30px;
  background-color: gray;
`;

const Contents_love = styled.div`
  background-color: ${(props) => (props.onOff ? "red" : "grey")};
  position: absolute;
  top: 110px;
  left: 250px;
  transform: rotateZ(-45deg);
  cursor: pointer;
  /* :hover {
    box-shadow: 0 0 20px red, 0 0 15px red, 0 0 10px red, 0 0 5px red;
  }
  :hover::before {
    box-shadow: 0 0 20px red, 0 0 15px red, 0 0 10px red, 0 0 5px red;
  }
  :hover::after {
    box-shadow: 0 0 20px red, 0 0 15px red, 0 0 10px red, 0 0 5px red;
  } */
  width: 15px;
  height: 15px;
  ${(props) => (props.onOff ? "animation: pop 0.2s ease-in forwards" : "")};
  @keyframes pop {
    0% {
      transform: scale(1, 1) rotateZ(-45deg);
    }
    99% {
      transform: scale(2, 2) rotateZ(-45deg);
    }
    100% {
      transform: scale(1, 1) rotateZ(-45deg);
    }
  }

  ::before {
    content: "";
    width: 15px;
    height: 15px;
    background-color: ${(props) => (props.onOff ? "red" : "grey")};
    position: absolute;
    top: 0;
    left: 10px;
    border-radius: 50%;
  }
  ::after {
    content: "";
    width: 15px;
    height: 15px;
    background-color: ${(props) => (props.onOff ? "red" : "grey")};
    position: absolute;
    top: -10px;
    left: 0;
    border-radius: 50%;
  }
`;

export {
  ResionWrap,
  ResionLeft,
  Left_contents_wrap,
  Check_wrap,
  Check_title,
  Check_input,
  Check_btn,
  ResionRight,
  Right_contents_wrap,
  Right_contents,
  Contents_img_wrap,
  Contents_img,
  ContentsData_wrap,
  ContentsData,
  Contents_title,
  Contents_button,
  Contents_love,
};
