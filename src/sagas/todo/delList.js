import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

//import token from store
import { store } from 'store/index';


//compile token, request to call the api
function* delList({data}) {
    
    // console.log("delList saga");

    let token = store.getState().PROFILE.userSession.data;
    const headers = {Authorization:`Bearer ${token}`};

    
    
    const formData = new FormData();
    //from api              //from form pass from container, passing id of task
    //we already passing numnber not object, so no data.id from front end
    formData.append('list_id', data);
    console.log(data);

    const {response, error} = yield call (api.delList, formData, headers);
    
    console.log(response,error);

    if(response && response.data.status ==="success"){
      yield put(Actions.delListSuccess(response.data));
    }

   if (error){
    yield put(Actions.delListFail(error));
  }
}

function* watchDelList() {
  yield takeLatest(Actions.DEL_LIST, delList);
}

export default function* submit() {
  yield all([fork(watchDelList)]);
}
