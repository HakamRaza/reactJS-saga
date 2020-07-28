import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

//import token from store
import { store } from 'store/index';


//compile token, request to call the api
function* getAll() {
    
    // console.log("getAll saga");

    let token = store.getState().PROFILE.userSession.data;
    // let token = Actions.activateUserSession(store).data;

    console.log("the token is:", token);

    const headers = {Authorization:`Bearer ${token}`};
    
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
