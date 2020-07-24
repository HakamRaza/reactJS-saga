// // saga function import
// import { takeLatest, call,  all, fork, put } from "redux-saga/effects";

// // import action
// import Actions from "../../actions";

// // import api
// import * as api from "../../api";
// import { register } from "../../actions/auth/register";


// function* register() {
//     // console.log("REGISTER DATA");
//     //prepare formData to pass to api, like postman, you compile all data, to be sent to api process
//     const formData = new FormData;
//     formData.append('name');
//     formData.append('email');
//     formData.append('password');
//     formData.append('password_confirmation');

//     //pass to api
//     const {response, error} = yield call(api.register, formData);
//     //formData will pass to index/api/index.js as data

//     yield put();
// }

// // function* is saga fx
// function* watchRegister(){
//     yield takeLatest(Actions.REGISTER, register);

// }

// //export and execute 2 function together using fork
// export default function* submit() {
//     // yield all([fork(watchRegister), fork(another funtion)])
//     yield all([fork(watchRegister)]);
// }











import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

import { encode } from "../../services/encryption";

function* register({ data }) {
  console.log("register saga");
}

function* watchRegister() {
  yield takeLatest(Actions.REGISTER, register);
}

export default function* submit() {
  yield all([fork(watchRegister)]);
}
