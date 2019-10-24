import { authHeader } from "../helpers";

export const carService = {
  register,
  getAll,
  getCar,
  update,
  delete: _delete
};


async function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  const response = await fetch(`/users`, requestOptions);
  return handleResponse(response);
}

async function getCar(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/${id}`,
    requestOptions
  );
  return handleResponse(response);
}

async function register(user, CSRFTokenObject) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user, CSRFTokenObject })
  };
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/users/register`,
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


function handleResponse(response) {
  return response.text().then(text => {
    console.log("text: ", text);

    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        throw Error("Error")
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
