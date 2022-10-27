import React, { useRef, useState, useEffect } from "react";
import {
  HeaderWrap,
  HeaderLeft,
  HeaderImgLogo,
  HeaderPageMenu,
  HeaderPageContents,
  HeaderRight,
  HeaderBtn,
  HeaderMenu,
  HeaderMenuImg,
} from "./styledComponents";
import { Sign, Login, Authentication, SignUp, Message } from "../";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { img_logo, img_page_menu, img_menu } from "../../images";
import {
  login_func,
  sign_func,
  heart_func,
  shoes_func,
  reserv_func,
} from "../../redux/middleware";

const Header = ({ loginData, dataCheck }) => {
  const idInput = useRef();
  const pwInput = useRef();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const auth_check = useSelector((state) => state.auth_go);
  const user_id = useSelector((state) => state.login_reducer.user_id);

  const [login_active, setlogin_active] = useState(false);
  const [sign_active, setSign_active] = useState(false);
  const [auth_active, setAuth_active] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(!loading);
    user_id && dispatch(shoes_func.colorFind(user_id));
  }, [user_id]);
  // 로그인 활성화
  function activeLogin() {
    setlogin_active(!login_active);
    if (sign_active) {
      setSign_active(!sign_active);
    }
    idInput.value = "";
    pwInput.value = "";
  }

  // 인증번호 생성
  function make_authNum() {
    let temp = [];
    for (let i = 0; i < 4; i++) {
      temp.push(Math.floor(Math.random() * 9 + 1));
    }
    return temp.join("");
  }
  let [auth_num, setAuth_num] = useState(0);

  // 회원가입 활성화
  const emailInput = useRef();
  function activeSign() {
    setAuth_num(make_authNum());
    setSign_active(!sign_active);
    if (login_active) {
      setlogin_active(!login_active);
    }
  }

  // 로그인 시도 함수
  function login_go() {
    dispatch(login_func.login(idInput.value, pwInput.value));
    dispatch(shoes_func.colorFind(idInput.value));
    idInput.value = "";
    pwInput.value = "";
    idInput.current.value = "";
    pwInput.current.value = "";
    setlogin_active(!login_active);
  }

  // 회원가입 인증메일 입력
  let [sign_up_id, setSign_up_id] = useState();
  function sign_go() {
    let regExp = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    );
    setSign_up_id(emailInput.value);
    function sending_mail() {
      dispatch(sign_func.authentication(emailInput.value, auth_num));
      setSign_active(!sign_active);
      setAuth_active(!auth_active);
    }
    regExp.test(emailInput.value)
      ? sending_mail()
      : alert("이메일을 확인하세요.");
    //입력창 초기화
    emailInput.value = "";
    emailInput.current.value = "";
  }

  // 인증하기
  let authInput = useRef();
  function auth_up() {
    function check_auth() {
      setSignUp(!signUp);
      setAuth_active(!auth_active);
      console.log("인증성공");
    }
    auth_num == authInput.value
      ? check_auth()
      : alert("인증번호를 다시 입력하세요.");
  }

  // 회원가입 입력하기
  let signInput_pw = useRef();
  let signInput_pw_check = useRef();
  let signInput_nickName = useRef();
  let signInput_phone = useRef();
  function sign_up() {
    if (
      signInput_pw.value &&
      signInput_pw_check.value &&
      signInput_nickName.value &&
      signInput_phone.value != null
    ) {
      if (signInput_pw.value === signInput_pw_check.value) {
        dispatch(
          sign_func.sign(
            sign_up_id,
            signInput_pw.value,
            signInput_nickName.value,
            signInput_phone.value
          )
        );
        setSignUp(!signUp);
        signInput_pw.value = "";
        signInput_pw_check.value = "";
        signInput_nickName.value = "";
        signInput_phone.value = "";
      } else {
        alert("비밀번호를 확인하세요.");
      }
    } else {
      alert("모든 정보를 입력하세요.");
    }
  }

  // 로그아웃
  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  // 메뉴버튼
  const active_check = useRef(null);
  function menu_active() {
    active_check.current.style.display == "block"
      ? (active_check.current.style.display = "none")
      : (active_check.current.style.display = "block");
  }

  // 페이지 버튼
  const page_active_check = useRef(null);
  function page_menu_active() {
    page_active_check.current.style.display == "block"
      ? (page_active_check.current.style.display = "none")
      : (page_active_check.current.style.display = "block");
    // dispatch(heart_func.heartCheck(user_id));
  }

  // 좋아요 확인
  const _heartCheck = async () => {
    try {
      const response = await dispatch(heart_func.heartCheck(user_id));
    } catch (e) {
      console.log(e);
    }
    page_menu_active();
    navi("/resion");
  };

  // 예약 확인
  const _reservationCheck = async () => {
    // try {
    //   let response = await dispatch(reserv_func.reservation_check(user_id));
    // } catch (e) {
    //   console.log(e);
    // }
    page_menu_active();
    navi("/reservation");
  };
  return (
    <div className="header">
      <HeaderWrap>
        <HeaderLeft>
          <HeaderImgLogo
            src={img_logo}
            onClick={() => {
              navi("/");
            }}
          />
        </HeaderLeft>
        <HeaderPageContents ref={page_active_check}>
          <HeaderBtn onClick={_heartCheck}>여행지 찾기</HeaderBtn>
          <HeaderBtn onClick={_reservationCheck}>예약하기</HeaderBtn>
        </HeaderPageContents>
        <HeaderRight>
          {loginData.isLogin ? (
            <>
              <HeaderPageMenu src={img_page_menu} onClick={page_menu_active} />
              <h1>{loginData.user_nickName}님 ㅎㅇ</h1>
              <HeaderMenuImg
                src={img_menu}
                onClick={() => {
                  menu_active();
                }}
              />
              <HeaderMenu ref={active_check}>
                <HeaderBtn onClick={logout}>로그아웃</HeaderBtn>
                <HeaderBtn
                  onClick={() => {
                    navi("/mypage");
                  }}
                >
                  마이페이지
                </HeaderBtn>
              </HeaderMenu>
            </>
          ) : (
            <>
              {/* <HeaderBtn onClick={dataCheck}>항공확인</HeaderBtn> */}
              <HeaderBtn onClick={activeLogin}>로그인</HeaderBtn>
              <HeaderBtn onClick={activeSign}>회원가입</HeaderBtn>
              {login_active ? (
                <Login
                  idInput={idInput}
                  pwInput={pwInput}
                  login_go={login_go}
                />
              ) : (
                <></>
              )}
              {sign_active ? (
                <Sign emailInput={emailInput} sign_go={sign_go} />
              ) : (
                <></>
              )}
              {auth_active ? (
                <Authentication authInput={authInput} auth_up={auth_up} />
              ) : (
                <></>
              )}
              {signUp ? (
                <SignUp
                  sign_up_id={sign_up_id}
                  signInput_pw={signInput_pw}
                  signInput_pw_check={signInput_pw_check}
                  signInput_nickName={signInput_nickName}
                  signInput_phone={signInput_phone}
                  sign_up={sign_up}
                />
              ) : (
                <></>
              )}
            </>
          )}
        </HeaderRight>
      </HeaderWrap>
    </div>
  );
};

export default Header;
