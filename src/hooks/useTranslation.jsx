import { useLocation } from "@solidjs/router";
import * as deMenuItems from "../data/translations/menuItems.de";
import * as enMenuItems from "../data/translations/menuItems.en";
import * as enHome from "../pages/Home/translations/Home.en";
import * as deHome from "../pages/Home/translations/Home.de";

export const languages = ["de", "en"];

export function useTranslation(locale) {
  const location = useLocation();
  let language = location.pathname.split("/")[1];
  if (!languages.includes(language)) language = "en";
  document.documentElement.lang = language;
  locale(language);
}

export function useBasePath() {
  const language = document.documentElement.lang;
  return language === "en" ? "/" : `/${language}`;
}

export function useDict() {
  return {
    de: { ...deMenuItems.de, ...deHome.de },
    en: { ...enMenuItems.en, ...enHome.en },
  };
}
