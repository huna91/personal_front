import styled from "styled-components";

const Piker_title_1 = styled.h1`
  font-size: 40px;
  color: white;
  position: absolute;
  top: 100px;
  left: 900px;
`;

const Piker_title_2 = styled.h1`
  font-size: 40px;
  color: white;
  position: absolute;
  top: 145px;
  left: 900px;
`;

const Piker_point = styled.h1`
  font-size: 40px;
  color: yellow;
  display: inline;
`;

const Piker_contents = styled.div`
  color: white;
  width: 200px;
  position: absolute;
  top: 270px;
  left: 1000px;
`;

const Model_contents = styled.div`
  width: 500px;
  height: 480px;
  box-shadow: inset 0 0 15px white, inset 0 0 5px white, inset 0 0 10px white,
    inset 0 0 25px white;
  border-radius: 30px;
  position: absolute;
  top: 52%;
  left: 30%;
  transform: translate(-50%, -50%);
  cursor: auto;
`;

const SaveBtn = styled.button`
  width: 300px;
  height: 60px;
  border: 2px solid pink;
  border-radius: 20px;
  background-color: inherit;
  color: plum;
  font-size: 30px;
  position: absolute;
  top: 550px;
  left: 940px;
  cursor: pointer;
  :hover {
    background-color: plum;
    border: none;
    color: black;
    transition: 1s;
  }
`;

export {
  Piker_title_1,
  Piker_title_2,
  Piker_point,
  Piker_contents,
  Model_contents,
  SaveBtn,
};
