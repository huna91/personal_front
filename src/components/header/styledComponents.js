import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  /* border: 1px solid white; */
  margin-top: 10px;
  z-index: 3;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div``;

const HeaderImgLogo = styled.img`
  width: auto;
  height: 50px;
  margin-left: 30px;
  margin-top: 15px;
  margin-right: 30px;
  animation: motion 2s linear infinite;
  cursor: pointer;
  @keyframes motion {
    0% {
      margin-top: 15px;
      margin-left: 35px;
    }
    10% {
      margin-top: 10px;
      margin-left: 40px;
    }
    20% {
      margin-top: 15px;
      margin-left: 45px;
    }
    30% {
      margin-top: 10px;
      margin-left: 50px;
    }
    40% {
      margin-top: 15px;
      margin-left: 55px;
    }
    49.99% {
      transform: rotateY(0deg);
    }
    50% {
      margin-top: 10px;
      margin-left: 60px;
      transform: rotateY(180deg);
    }
    60% {
      margin-top: 15px;
      margin-left: 55px;
      transform: rotateY(180deg);
    }
    70% {
      margin-top: 10px;
      margin-left: 50px;
      transform: rotateY(180deg);
    }
    80% {
      margin-top: 15px;
      margin-left: 45px;
      transform: rotateY(180deg);
    }
    90% {
      margin-top: 10px;
      margin-left: 40px;
      transform: rotateY(180deg);
    }
    100% {
      margin-top: 15px;
      margin-left: 35px;
      transform: rotateY(180deg);
    }
  }
`;

const HeaderPageMenu = styled.img`
  width: 60px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: -600px;
  cursor: pointer;
  /* box-shadow: 0 5px 5px white; */
  animation: fly 1.2s linear forwards;
  @keyframes fly {
    0% {
      left: 300px;
      transform: rotateY(180deg);
    }
    99% {
      transform: rotateY(180deg);
    }
    100% {
      left: -600px;
    }
  }
`;

const HeaderPageContents = styled.div`
  width: 400px;
  height: 70px;
  /* border: 1px solid white; */
  position: absolute;
  top: 65px;
  left: 35vw;
  display: none;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeaderBtn = styled.button`
  background-color: inherit;
  color: white;
  width: 150px;
  height: 60px;
  font-size: 25px;
  margin-right: 20px;
  border: none;
  cursor: pointer;
  :hover {
    text-shadow: 0 0 5px orange, 0 0 10px orange;
  }
`;

const HeaderMenu = styled.div`
  width: 150px;
  position: absolute;
  top: 80px;
  left: 75px;
  border: 1px solid white;
  border-radius: 15px;
  box-shadow: 0 0 5px white, 0 0 10px white;
  display: none;
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    top: -14px;
    left: 115px;
    border-color: #000 transparent;
    border-style: solid;
    border-width: 0 10px 15px 10px;
    z-index: 5;
  }
  ::after {
    content: "";
    position: absolute;
    z-index: 4;
    top: -16px;
    left: 115px;
    border-color: #fff transparent;
    border-style: solid;
    border-width: 0 10px 15px 10px;
  }
`;

const HeaderMenuImg = styled.img`
  width: 28px;
  height: 35px;
  margin: 5px 30px 5px 20px;
  transition: 0.2s;
  cursor: pointer;
`;

export {
  HeaderWrap,
  HeaderLeft,
  HeaderImgLogo,
  HeaderPageMenu,
  HeaderPageContents,
  HeaderRight,
  HeaderBtn,
  HeaderMenu,
  HeaderMenuImg,
};
