//folder name of the file situated, in this case the src/auth
export const NAME = "TODO";


//just a type name
export const ADD_NEW = `${NAME}/ADD_NEW`;
export const ADD_NEW_SUCESS = `${NAME}/ADD_NEW_SUCESS`;
export const ADD_NEW_FAIL = `${NAME}/ADD_NEW_FAIL`;

//to pass data to containers, arrow funtion, get from register export
export const getAddNewData = (store) => store[NAME].getAll;


//create action function, step 3
export const addNew = (data) => ({
    type: ADD_NEW,
    data: data,
})

export const addNewSuccess = (data) => ({
    type: ADD_NEW_SUCESS,
    data: data,
})

export const addNewFail = (error) => ({
    type: ADD_NEW_FAIL,
    error: error,
    data: {},
})