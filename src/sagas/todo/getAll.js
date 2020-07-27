import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

//import token from store
import {getStore} from '../../store/configureStore';


//compile token, request to call the api
function* getAll() {
    
    console.log("getAll saga");

    // let store = getStore().getState();
    // let token = Actions.activateUserSession(store).data;
    // console.log("the token is:", token);

    // const headers = {Authorization:`Bearer ${token}`};
    
    //hard coded the token
    const headers = {Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU5NTgyNzIzOSwiZXhwIjoxNTk1ODMwODM5LCJuYmYiOjE1OTU4MjcyMzksImp0aSI6Ik42VU1XRjR6ckE2d2hWaHYiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.3gh6rTzCK8R0yBG3IQtvRY5D1hWBEvLrYkPVB4v14o8`};

    const {response, error} = yield call (api.getAll, headers);


    console.log(response,error);

  if (error){
    yield put(Actions.getAllFail(error));
  }
}

function* watchGetAll() {
  yield takeLatest(Actions.GET_ALL, getAll);
}

export default function* submit() {
  yield all([fork(watchGetAll)]);
}
