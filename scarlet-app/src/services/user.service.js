import { authHeader } from "../helpers";

const config = require("../../../config.default");
export const userService = {
  login,
  logout,
  register,
  getAll,
  getUser,
  update,
  delete: _delete,
  resetPassword
};

async function login(email, password, CSRFTokenObject) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ email, password, CSRFTokenObject })
  };

  const response = await fetch(`${config.apiUrl}/users/login`, requestOptions);
  const user = await handleResponse(response);
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

async function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  const response = await fetch(`/users`, requestOptions);
  return handleResponse(response);
}

async function getUser(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions);
  return handleResponse(response);
}

async function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  const response = await fetch(
    `${config.apiUrl}/users/register`,
    requestOptions
  );
  return handleResponse(response);
}

async function update(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  const response = await fetch(`/users/${user.id}`, requestOptions);
  return handleResponse(response);
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader()
  };

  const response = await fetch(`/users/${id}`, requestOptions);
  return handleResponse(response);
}

async function resetPassword(email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email)
  };

  const response = await fetch(
    `${config.apiUrl}/users/reset-password`,
    requestOptions
  );
  return handleResponse(response);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
