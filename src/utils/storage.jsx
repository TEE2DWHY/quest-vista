import Cookies from "js-cookie";

export const cookie = {
  storeCookie: (name, value, expiresIn) => {
    Cookies.set(name, value, { expires: expiresIn, secure: true });
  },
  getCookie: (name) => {
    const value = Cookies.get(name);
    return value;
  },
  removeCookie: (name) => {
    Cookies.remove(name);
  },
};
