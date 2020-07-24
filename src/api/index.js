import fetchApi from "./helper";

export const login = data => {
  return fetchApi("post", "user/loginByEmail", data);
};


export const register = data => {
  //type of http verb, route of api (endpoint), data is the data pass from 
  return fetchApi("post", "api/auth/register", data);
};