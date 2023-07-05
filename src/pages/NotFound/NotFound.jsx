import { useTranslation } from "../../hooks/useTranslation";
import { useI18n } from "@amoutonbrady/solid-i18n";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";

function NotFound() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Section width="small" bg="gray" py="large">
        <h1>Error 404</h1>
        <h4>Page could not be found. It might have been removed or renamed.</h4>
      </Section>
    </DefaultLayout>
  );
}

export default NotFound;
