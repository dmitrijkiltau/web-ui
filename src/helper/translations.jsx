import deHome from "../pages/Home/Home.de";
import enHome from "../pages/Home/Home.en";

export function translations() {
  return {
    de: deHome(),
    en: enHome(),
  };
}

export function getLanguage(language) {
  switch (language) {
    case "de":
      return "de";
    default:
      return "en";
  }
}
