import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

//import token from store
import { store } from 'store/index';


function* addNew({data}) {
    
    let token = store.getState().PROFILE.userSession.data;
    const headers = {Authorization:`Bearer ${token}`};

    const formData = new FormData();
    //from api              //from form pass from container
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('status', data.status);
    
    const {response, error} = yield call (api.addNew, formData, headers);
    // console.log(response,error);

    //call both function to get real time view
    if(response && response.data.status === 'success'){
        yield put(Actions.addNewSuccess(response.data));
        yield put(Actions.getAll());
    }


  if (error){
    yield put(Actions.addNewFail(error.response.data));

  }
}

function* watchAddNew() {
  yield takeLatest(Actions.ADD_NEW, addNew);
}

export default function* submit() {
  yield all([fork(watchAddNew)]);
}
