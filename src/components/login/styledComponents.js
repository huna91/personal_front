import styled from "styled-components";

const LoginWrap = styled.div`
  position: absolute;
  top: 80px;
  left: -30px;
  z-index: 5;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 0 0 5px white, 0 0 10px white;
  background-color: rgba(20, 20, 20, 0.85);
  width: 330px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    top: -18px;
    left: 85px;
    border-color: #000 transparent;
    border-style: solid;
    border-width: 0 15px 20px 15px;
    z-index: 5;
  }
  ::after {
    content: "";
    position: absolute;
    z-index: 4;
    top: -21px;
    left: 85px;
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 15px 20px 15px;
  }
  animation: fadein 1s ease-out;
  /* animation-fill-mode: forwards; */
  @keyframes fadein {
    0% {
      left: 200px;
    }
    100% {
      left: -30px;
    }
  }
`;

const LoginBtn = styled.button`
  background-color: inherit;
  color: white;
  width: 150px;
  height: 60px;
  font-size: 25px;
  margin-right: 20px;

  cursor: pointer;
  :hover {
    text-shadow: 0 0 5px greenyellow, 0 0 10px greenyellow;
  }
`;

const LoginInput = styled.input`
  margin: 0 10px;
  width: 150px;
  height: 24px;
  border-radius: 5px;
  border: none;
`;

const LoginContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export { LoginWrap, LoginBtn, LoginInput, LoginContents };
