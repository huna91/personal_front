import "./App.css";
import { Main, Mypage, Resion, Reservation } from "./pages";
import { Header, Loading } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

// import Main from "./components/Main";

function App() {
  const loginData = useSelector((state) => state.login_reducer);
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, [loginData]);
  const dispatch = useDispatch();

  const RedirectResion = () => {
    return loginData.isLogin ? <Resion /> : <Navigate to="/" />;
  };
  const RedirectMypage = () => {
    return loginData.isLogin ? <Mypage /> : <Navigate to="/" />;
  };
  const RedirectReservation = () => {
    return loginData.isLogin ? <Reservation /> : <Navigate to="/" />;
  };
  return loading ? (
    <>
      <Loading />
    </>
  ) : (
    <div className="App">
      <Header loginData={loginData} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<RedirectMypage />} />
        <Route path="/resion" element={<RedirectResion />} />
        <Route path="/reservation" element={<RedirectReservation />} />
      </Routes>
    </div>
  );
}

export default App;
