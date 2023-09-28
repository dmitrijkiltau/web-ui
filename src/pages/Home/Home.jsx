import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";

function Home() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Section width="lg" align="center" height="full" py="20" bg="gray">
        <h1>{t("home.title")}</h1>
        <h2 className="h5">{t("home.subtitle")}</h2>
        <p>{t("home.description")}</p>
      </Section>
    </DefaultLayout>
  );
}

export default Home;
