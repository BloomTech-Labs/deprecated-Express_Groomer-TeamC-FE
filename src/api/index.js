import axios from 'axios';

let groomersReq = `${process.env.REACT_APP_API_URI}/groomers`;
let customersReq = `${process.env.REACT_APP_API_URI}/customers`;

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;
const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const requestGroomers = axios.get(groomersReq);
const getGroomerData = () => {
  return axios.get(groomersReq).then(response => {
    let groomers = response.data;
    return groomers;
  });
};

const requestUserGroomers = axios.get(groomersReq);
const requestUserCustomers = axios.get(customersReq);

const getUserData = () => {
  return axios
    .all([requestUserGroomers, requestUserCustomers])
    .then(
      axios.spread((...responses) => {
        let users = [...responses[0].data, ...responses[1].data];
        return users;
      })
    )

    .catch(errors => {
      return errors;
    });
};

const getGUserData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};
const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};
const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};
const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getGroomerData,
  getUserData,
};
