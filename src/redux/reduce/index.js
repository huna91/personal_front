import { combineReducers } from "redux";
import login_reducer from "./login_reducer";
import sign_reducer from "./sign_reducer";
import flight_reducer from "./flight_reducer";
import heart_reducer from "./heart_reducer";
import shoes_reducer from "./shoes_reducer";
import reserv_reducer from "./reserv_reducer";

const rootReducer = combineReducers({
  login_reducer,
  sign_reducer,
  flight_reducer,
  heart_reducer,
  shoes_reducer,
  reserv_reducer,
});

export { rootReducer };
