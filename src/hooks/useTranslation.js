import { useLocation } from "@solidjs/router";
import { languages } from "./useDict";

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
