import { authHeader } from "../helpers";

const config = require("../../../config.default");
export const userService = {
  facebookLogin,
  login,
  logout,
  register,
  getAll,
  getUser,
  update,
  delete: _delete,
  resetPassword,
  checkResetToken,
  updatePassword,
  checkValidationToken,
  validateAccount,
  resendValidationEmail
};

async function login(email, password, CSRFTokenObject) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": config.NonApiServerUrl
    },
    body: JSON.stringify({ email, password, CSRFTokenObject })
  };

  const response = await fetch(`${config.apiUrl}/users/login`, requestOptions);
  const user = await handleResponse(response);
  console.log("user: ", user);
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

async function facebookLogin(access_token) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": config.NonApiServerUrl
    },
    body: JSON.stringify(access_token),
    mode: "cors",
    cache: "default"
  };
  const response = await fetch(
    `${config.apiUrl}/users/auth/facebook`,
    requestOptions
  );

  const user = await handleResponse(response);

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

async function register(user, CSRFTokenObject) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, CSRFTokenObject })
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

async function resetPassword(email, CSRFTokenObject) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, CSRFTokenObject })
  };

  const response = await fetch(
    `${config.apiUrl}/users/reset-password`,
    requestOptions
  );
  return handleResponse(response);
}

async function checkResetToken(resetToken) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const response = await fetch(
    `${config.apiUrl}/users/check-reset-token?resetToken=${resetToken}`,
    requestOptions
  );
  return handleResponse(response);
}

async function updatePassword(email, password, CSRFTokenObject) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, CSRFTokenObject })
  };

  const response = await fetch(
    `${config.apiUrl}/users/update-password`,
    requestOptions
  );
  return handleResponse(response);
}

async function checkValidationToken(validationToken) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const response = await fetch(
    `${config.apiUrl}/users/check-validation-token?validationToken=${validationToken}`,
    requestOptions
  );
  return handleResponse(response);
}

async function validateAccount(email, CSRFTokenObject) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, CSRFTokenObject })
  };

  const response = await fetch(
    `${config.apiUrl}/users/validate-account`,
    requestOptions
  );
  return handleResponse(response);
}

async function resendValidationEmail(email, CSRFTokenObject) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, CSRFTokenObject })
  };
  const response = await fetch(
    `${config.apiUrl}/users/resend-validation-token`,
    requestOptions
  );
  return handleResponse(response);
}

function handleResponse(response) {
  return response.text().then(text => {
    console.log("text: ", text);

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
