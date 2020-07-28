import { combineReducers } from "redux";

import getAll from "./getAll";
import addNew from "./addNew";

//combine to export
export default combineReducers({
  getAll,
  addNew,
});