import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreameReducer";
import lolipopReducer from "./lolipop/lilipopReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  lolipop: lolipopReducer
});

export default rootReducer;
