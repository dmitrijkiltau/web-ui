import { useLocation } from "@solidjs/router";
import * as enMenuItems from "../data/translations/menuItems.en";
import * as deMenuItems from "../data/translations/menuItems.de";
import * as enFooter from "../components/Footer/translations/Footer.en";
import * as deFooter from "../components/Footer/translations/Footer.de";
import * as deHome from "../pages/Home/translations/Home.de";
import * as enHome from "../pages/Home/translations/Home.en";
import * as enNotFound from "../pages/NotFound/translations/NotFound.en";
import * as deNotFound from "../pages/NotFound/translations/NotFound.de";

export const languages = ["de", "en"];

export function useTranslation(locale) {
  const location = useLocation();
  let browserLanguage = navigator.language || navigator.userLanguage;
  browserLanguage = browserLanguage.split("-")[0];
  let language = location.pathname.split("/")[1] || browserLanguage;

  if (!languages.includes(language)) language = "en";

  if (
    location.pathname.split("/")[1] !== language &&
    !location.pathname.split("/").includes("robots.txt")
  ) {
    window.location.pathname = `/${language + location.pathname}`;
  }

  document.documentElement.lang = language;
  locale(language);
}

export function useBasePath() {
  return `/${document.documentElement.lang}`;
}

export function useDict() {
  return {
    en: { ...enMenuItems.en, ...enFooter.en, ...enHome.en, ...enNotFound.en },
    de: { ...deMenuItems.de, ...deFooter.de, ...deHome.de, ...deNotFound.de },
  };
}
