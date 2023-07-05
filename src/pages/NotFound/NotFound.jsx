import { useI18n } from "@amoutonbrady/solid-i18n";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import { useTranslation } from "../../hooks/useTranslation";

function NotFound() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Section className="h-full" width="medium" bg="gray" py="large">
        <h1>{t("notFound.title")}</h1>
        <h4>{t("notFound.description")}</h4>
      </Section>
    </DefaultLayout>
  );
}

export default NotFound;
