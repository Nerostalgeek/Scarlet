import axios from "axios/index";
const config = require("../../../config.default");

const headers = {
  "Content-Type": "application/json"
};

export default {
  login: function(email, password) {
    return axios.post(
      `${config.apiUrl}/login`,
      {
        email,
        password
      },
      {
        headers
      }
    );
  },
  register: function(email, password) {
    return axios.post(
      `${config.apiUrl}/register`,
      {
        email,
        password
      },
      {
        headers
      }
    );
  }
};
