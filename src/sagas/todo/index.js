import { all, fork } from "redux-saga/effects";

import getAll from "./getAll";
import addNew from "./addNew";
import delList from "./delList";

export default function* home() {
  yield all([ fork(getAll), fork(addNew), fork(delList)]);
}
