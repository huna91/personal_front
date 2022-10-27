import styled from "styled-components";

const Contents_wrap = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flight_frame = styled.div`
  width: 300px;
  height: 300px;
  margin: 30px;
  border: 1px solid pink;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Flight_title = styled.h1`
  font-size: 22px;
  color: white;
  position: absolute;
  z-index: 2;
`;

const ResevBtn = styled.button`
  width: 200px;
  height: 42px;
  font-size: 22px;
  position: absolute;
  top: 280px;
  left: 50px;
  background-color: inherit;
  color: white;
  background-color: purple;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    border: 2px solid plum;
  }
`;

export { Contents_wrap, Flight_frame, Flight_title, ResevBtn };
