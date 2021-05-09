import { authHeader } from "../helpers";

export const csrfTokenService = {
  create,
  delete: _delete
};

async function create(user) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ user: user })
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/token/create`,
    requestOptions
  );
  const token = await handleResponse(response);
  return token;
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    body: JSON.stringify({ _id: id })
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/token/remove`,
    requestOptions
  );
  return handleResponse(response);
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
