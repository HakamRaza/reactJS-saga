import { combineReducers } from "redux";

import getAll from "./getAll";
import addNew from "./addNew";
import delList from "./delList";

//combine to export
export default combineReducers({
  getAll,
  addNew,
  delList,
});