//folder name of the file situated, in this case the src/auth
export const NAME = "TODO";


//just a type name
export const GET_ALL = `${NAME}/GET_ALL`;
export const GET_ALL_SUCESS = `${NAME}/GET_ALL_SUCESS`;
export const GET_ALL_FAIL = `${NAME}/GET_ALL_FAIL`;

//to pass data to containers, arrow funtion, get from register export
export const getGetAllData = (store) => store[NAME].getAll;


//create action function, step 3
export const getAll = (data) => ({
    type: GET_ALL,
    data: data,
})

export const getAllSuccess = (data) => ({
    type: GET_ALL_SUCESS,
    data: data,
})

export const getAllFail = (error) => ({
    type: GET_ALL_FAIL,
    error: error,
    data: {},
})