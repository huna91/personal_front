import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reserv_func } from "../../../redux/middleware";
import {
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
} from "./styleComponents";

const Seat = ({ conName, setActive }) => {
  const user_id = useSelector((state) => state.login_reducer.user_id);
  const pre_seat = useSelector((state) => state.reserv_reducer);
  pre_seat.preData ? console.log(pre_seat) : console.log("dhdh");
  let a = [];
  const seat = {
    row1: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row2: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row3: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row4: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row6: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row7: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row8: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    row9: [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  };
  const [row, setRow] = useState(seat);
  let any = (key, index) => {
    if (key == 1) {
      a = row.row1;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row1: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row1: a });
    } else if (key == 2) {
      a = row.row2;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row2: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row2: a });
    } else if (key == 3) {
      a = row.row3;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row3: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row3: a });
    } else if (key == 4) {
      a = row.row4;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row4: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row4: a });
    } else if (key == 6) {
      a = row.row6;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row6: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row6: a });
    } else if (key == 7) {
      a = row.row7;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row7: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row7: a });
    } else if (key == 8) {
      a = row.row8;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row8: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row8: a });
    } else if (key == 9) {
      a = row.row9;
      if (a[index] == 0) {
        return;
      } else if (a[index] == 2) {
        a[index] = 1;
        setRow({ ...row, row9: a });
        return;
      }
      a[index] = 2;
      setRow({ ...row, row9: a });
    }
  };
  // setInterval(() => {
  //   console.log(row1);
  // }, 1000);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch();
  }, []);

  function closePage() {
    setActive(false);
  }

  function seat_result() {
    dispatch({ type: "SEAT_RESERV", payload: row });
    setActive(false);
  }
  return (
    <>
      <Seat_pageWrap>
        <Seat_contentsWrap>
          <Seat_closeBtn onClick={closePage}>X</Seat_closeBtn>
          <Seat_title>{conName}</Seat_title>
          <Seat_rowWrap>
            <Seat_colWrap>
              {row.row1.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key1 = 1;
                      any(key1, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "A" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row2.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 2;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "B" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row3.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 3;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "C" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row4.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 4;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "D" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row5.map((value, index) => {
                return (
                  <Seat_wrap bgColor={value}>
                    <Seat_shape></Seat_shape>
                    <Seat_num></Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row6.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 6;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "E" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row7.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 7;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "F" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row8.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 8;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "G" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
            <Seat_colWrap>
              {row.row9.map((value, index) => {
                return (
                  <Seat_wrap
                    bgColor={value}
                    onClick={() => {
                      let key = 9;
                      any(key, index);
                    }}
                  >
                    <Seat_shape></Seat_shape>
                    <Seat_num>
                      {index == 4 || index == 9 ? "" : "H" + index}
                    </Seat_num>
                  </Seat_wrap>
                );
              })}
            </Seat_colWrap>
          </Seat_rowWrap>
          <Seat_saveBtn onClick={seat_result}>예 약 확 정</Seat_saveBtn>
        </Seat_contentsWrap>
      </Seat_pageWrap>
    </>
  );
};

export default Seat;
