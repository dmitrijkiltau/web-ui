import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";

function About() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Section width="small" bg="gray" py="large">
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </Section>
    </DefaultLayout>
  );
}

export default About;
