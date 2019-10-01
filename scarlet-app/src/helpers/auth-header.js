import Cookies from 'js-cookie';
export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));
  let csrfCookie = Cookies.get('_csrf');

  console.log('COOKIE CSRF', csrfCookie);

  if (user && user.token) {
    return { Authorization: user.token};
  } else {
    return {};
  }
}
