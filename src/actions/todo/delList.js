//folder name of the file situated, in this case the src/auth
export const NAME = "TODO";


//just a type name
export const DEL_LIST = `${NAME}/DEL_LIST`;
export const DEL_LIST_SUCESS = `${NAME}/DEL_LIST_SUCESS`;
export const DEL_LIST_FAIL = `${NAME}/DEL_LIST_FAIL`;

//to pass data to containers, arrow funtion, get from register export
export const getdelListData = (store) => store[NAME].delList;


//create action function, step 3
export const delList = (data) => ({
    type: DEL_LIST,
    data: data,
})

export const delListSuccess = (data) => ({
    type: DEL_LIST_SUCESS,
    data: data,
})

export const delListFail = (error) => ({
    type: DEL_LIST_FAIL,
    error: error,
    data: {},
})