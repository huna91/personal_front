import axios from "axios";
// import dot from "dotenv";
import XMLParser from "react-xml-parser";
// axios.defaults.withCredentials = true;

// dot.config();
function parseStr(dataSet) {
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  return dataArr;
}
function getFlight(from = null, to = null) {
  return async (dispatch, getState) => {
    const data = await axios({
      method: "POST",
      url: `http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?serviceKey=/FwIn/uLQpuG7SL6Www0H8/8z98ywwqy6eFBw4jFYRC7eRol5/RidoBRZae4X0RqmheueDqhv1fDFGRXbC/w6w==`,
      //   "http://15.165.17.118/flight",
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   },
      //   withCredentials: true,
    }).then(
      (e) => {
        console.log(parseStr(e));
      }
      // dispatch({ type: "GET_FLIGHT_DATA", payload: data });
    );
  };
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
// import request from "request";

// const url =
//   "http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList";
// const queryParams =
//   "?" +
//   encodeURIComponent("serviceKey") +
//   "=%2FFwIn%2FuLQpuG7SL6Www0H8%2F8z98ywwqy6eFBw4jFYRC7eRol5%2FRidoBRZae4X0RqmheueDqhv1fDFGRXbC%2Fw6w%3D%3D";

// function getFlight() {
//   return async (dispatch, getState) => {
//     const data = await request(
//       {
//         url: url + queryParams,
//         method: "GET",
//       },
//       function (error, response, body) {}
//     );
//   };
// }

export const Flight = { getFlight };
