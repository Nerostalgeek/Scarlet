import { authHeader } from "../helpers";

const config = require("../../../config.default");
export const csrfTokenService = {
  create,
  delete: _delete
};

function create(user) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ user: user })
  };

  return fetch(`${config.apiUrl}/token/create`, requestOptions)
    .then(handleResponse)
    .then(token => token);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    body: JSON.stringify({ _id: id })
  };

  return fetch(`${config.apiUrl}/token/remove`, requestOptions).then(
    handleResponse
  );
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
