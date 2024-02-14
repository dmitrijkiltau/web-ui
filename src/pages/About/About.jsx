import { useI18n } from "@amoutonbrady/solid-i18n";
import DefaultLayout from "../../layout/Default";
import { useTranslation } from "../../hooks/useTranslation";
import Hero from "../../components/Hero/Hero";

function About() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Hero title={t("about.title")} height="full" align="center" bg="gray">
        <h2 class="h5">{t("about.description")}</h2>
      </Hero>
    </DefaultLayout>
  );
}

export default About;
