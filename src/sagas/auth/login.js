import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";
import { Redirect } from "react-router";


function* login({ data }) {
  //data is from view
  // console.log(data);

  //1. creating object action
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  //2. call api and pass formData object
  const { response, error } = yield call(api.login, formData);
  
  //debug to know reponse, error
  // console.log("login saga", response,error);

  //3. check if there a response have and response.data.status reply is success

  if (response && response.data.status === "success"){

    // console.log(response);

    //4. when we got response, we pass in the data to frontend
    yield put(Actions.loginSuccess(response.data));

    //4.5 store the token inside store to be use later
    const token = response.data.token;
    yield put(Actions.activateUserSession(token));

  }
  
  //5.if no, we pass error, error origin is from api call fetchAPI
  if (error){

    yield put(Actions.loginFail(error.response.data));
    // accessing error pass from API
    
    //get the error object from laravel
    console.log("error response object",error.response);

    //get the message only
    console.log("error respoonse msg",error.response.data);
    
    //get the status code only - easier
    console.log("error respoonse code",error.response.status);
  }
}


function* watchLogin() {
  yield takeLatest(Actions.LOGIN, login);
}

export default function* submit() {
  yield all([fork(watchLogin)]);
}
