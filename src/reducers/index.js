import {combineReducers} from "redux";
import userReducer from "./userReducer";
import tweetReducer from "./tweetReducer";
const reducers=combineReducers({
    user:userReducer,
    tweet:tweetReducer,
  });
  
  export default reducers;