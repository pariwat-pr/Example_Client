import { combineReducers } from "redux";

import itemSelectReducer from "./itemSelectReducer";
import itemLatestReducer from "./itemLatestReducer";
import listReducer from "./itemListReducer";

export default combineReducers({
  list: listReducer,
  itemLatest: itemLatestReducer,
  itemSelect: itemSelectReducer,
});
