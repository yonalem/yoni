import axios from 'axios';

const setAuthToken = token => {
  // If there is token in the local storage
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
