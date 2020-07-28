import { all, fork } from "redux-saga/effects";

import getAll from "./getAll";
import addNew from "./addNew";

export default function* home() {
  yield all([ fork(getAll), fork(addNew)]);
}
