import { useI18n } from "@amoutonbrady/solid-i18n";
import DefaultLayout from "../../layout/Default";
import { useTranslation } from "../../hooks/useTranslation";
import Hero from "../../components/Hero/Hero";

function NotFound() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Hero title={t("notFound.title")} height="full" align="center" bg="dark">
        <h2 class="h4">{t("notFound.description")}</h2>
      </Hero>
    </DefaultLayout>
  );
}

export default NotFound;
