//folder name of the file situated, in this case the src/auth
export const NAME = "AUTH";


//just a type name
export const REGISTER = `${NAME}/REGISTER`;
export const REGISTER_SUCESS = `${NAME}/REGISTER_SUCESS`;
export const REGISTER_FAIL = `${NAME}/REGISTER_FAIL`;


//create action function, step 3
export const register = data => ({
    type: REGISTER,
    data: data,
})

export const registerSuccess = data => ({
    type: REGISTER_SUCESS,
    data: data,
})

export const registerFail = data => ({
    type: REGISTER_FAIL,
    error: error,
})


