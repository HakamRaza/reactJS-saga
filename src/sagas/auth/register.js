// // saga function import
import { takeLatest, call, all, fork, put } from "redux-saga/effects";

// import action
import Actions from "../../actions";

// import api
import * as api from "../../api";

// import { register } from "../../actions/auth/register";
// import { encode } from "../../services/encryption";

function* register({ data }) {
  // console.log("register saga");
  // console.log(data);

  //prepare formData to pass to api, like postman, you compile all data, to be sent to api process
  const formData = new FormData();
  
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('password', data.password);
  formData.append('password_confirmation', data.password_confirmation);

  // console.log(formData)
  // console.log(response, error);


  //pass to api
  const {response, error} = yield call(api.register, formData);
  // formData will pass to index/api/index.js as data
  

}

// function* is saga fx
function* watchRegister() {
  yield takeLatest(Actions.REGISTER, register);
}

// export and execute 2 function together using fork
export default function* submit() {
  yield all([fork(watchRegister)]);
}
