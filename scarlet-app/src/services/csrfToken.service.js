import { authHeader } from "../helpers";

const config = require("../../../config.default");
export const csrfTokenService = {
  create,
  delete: _delete
};

function create() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "http://localhost:6200",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  return fetch(`${config.apiUrl}/token/create`, requestOptions)
    .then(handleResponse)
    .then(token => token);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE"
  };

  return fetch(`/token/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
