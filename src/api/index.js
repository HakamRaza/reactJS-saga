import fetchApi from "./helper";

export const login = data => {
  return fetchApi("post", "api/auth/login", data);
};


export const register = data => {
  //type of http verb, route of api (endpoint), data is the data pass from 
  return fetchApi("post", "api/auth/register", data);
};

export const getAll = (headers) => {
  return fetchApi("get", "api/all", null, headers);
};

export const addNew = (data, headers) => {
  return fetchApi("post", "api/new", data, headers);
};

export const delList = (data, headers) => {
  return fetchApi("post", "api/delete", data, headers);
};

// if using get from address @delete method
// export const delList = (headers) => {
//   return fetchApi("delete", `api/${delete.id}`, null, headers);
// };