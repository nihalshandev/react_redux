import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreameReducer";
import lolipopReducer from "./lolipop/lilipopReducer";
import userReducer from "./Users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  lolipop: lolipopReducer,
  users: userReducer
});

export default rootReducer;
