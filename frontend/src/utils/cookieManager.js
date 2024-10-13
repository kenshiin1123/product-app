import Cookies from "js-cookie";

const setDarkModeCookies = (darkMode) => {
  Cookies.set("darkMode", darkMode, {
    sameSite: "Lax",
    expires: 7,
  });
};

const getDarkModeCookies = () => {
  // If the user's device is in dark mode, the website will also switch to dark mode; otherwise, it will use light mode.
  if (Cookies.get("darkMode") === undefined) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkModeCookies("true");
    } else {
      setDarkModeCookies("false");
    }
  }
  return Cookies.get("darkMode") === "true";
};

const deleteDarkModeCookies = () => {
  Cookies.remove("darkMode");
};

export { setDarkModeCookies, getDarkModeCookies, deleteDarkModeCookies };
