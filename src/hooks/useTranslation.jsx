import { useLocation } from "@solidjs/router";
import { enMenuItems } from "../data/translations/menuItems.en";
import { deMenuItems } from "../data/translations/menuItems.de";
import { enHeader } from "../components/Header/translations/Header.en";
import { deHeader } from "../components/Header/translations/Header.de";
import { enFooter } from "../components/Footer/translations/Footer.en";
import { deFooter } from "../components/Footer/translations/Footer.de";
import { deHome } from "../pages/Home/translations/Home.de";
import { enHome } from "../pages/Home/translations/Home.en";
import { enAbout } from "../pages/About/translations/About.en";
import { deAbout } from "../pages/About/translations/About.de";
import { enLegalNotice } from "../pages/LegalNotice/translations/LegalNotice.en";
import { deLegalNotice } from "../pages/LegalNotice/translations/LegalNotice.de";
import { enPrivacyPolicy } from "../pages/PrivacyPolicy/translations/PrivacyPolicy.en";
import { dePrivacyPolicy } from "../pages/PrivacyPolicy/translations/PrivacyPolicy.de";
import { enNotFound } from "../pages/NotFound/translations/NotFound.en";
import { deNotFound } from "../pages/NotFound/translations/NotFound.de";

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
    en: {
      ...enMenuItems,
      ...enHeader,
      ...enFooter,
      ...enHome,
      ...enAbout,
      ...enLegalNotice,
      ...enPrivacyPolicy,
      ...enNotFound,
    },
    de: {
      ...deMenuItems,
      ...deHeader,
      ...deFooter,
      ...deHome,
      ...deAbout,
      ...deLegalNotice,
      ...dePrivacyPolicy,
      ...deNotFound,
    },
  };
}
