import styled from "styled-components";

const SignUpWrap = styled.div`
  position: absolute;
  top: 80px;
  left: -30px;
  z-index: 5;
  color: white;
  font-size: 20px;
  border: 2px solid white;
  background-color: rgba(20, 20, 20, 0.85);
  border-radius: 20px;
  width: 350px;
  height: 400px;
  display: flex;
  box-shadow: 0 0 5px white, 0 0 10px white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    top: -18px;
    left: 255px;
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
    left: 255px;
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

const SignUpContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px;
`;

const Span = styled.span`
  display: flex;
  margin: 0 10px;
  width: 200px;
  height: 24px;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Label = styled.label`
  font-size: 30px;
  animation: wiggle 2s linear infinite;
  transform: rotate(0deg);

  @keyframes wiggle {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const SignUpInput = styled.input`
  margin: 0 10px;
  width: 200px;
  height: 24px;
  border-radius: 5px;
  border: none;
  caret-color: blue;
  background-color: rgba(255, 255, 255, 0.5);
  :focus {
    box-shadow: 0 0 5px green, 0 0 10px green, 0 0 15px white;
  }
  ::placeholder {
    color: plum;
    font-size: 15px;
    text-align: center;
  }
`;

const SignUpBtn = styled.button`
  background-color: inherit;
  color: white;
  width: 150px;
  height: 60px;
  font-size: 25px;
  margin: 0;

  cursor: pointer;
  :hover {
    text-shadow: 0 0 5px greenyellow, 0 0 10px greenyellow;
  }
`;

export { SignUpWrap, SignUpContents, Label, Span, SignUpInput, SignUpBtn };
