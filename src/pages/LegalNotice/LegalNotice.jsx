import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";

function LegalNotice() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Hero title={t("legalNotice.title")} align="center" className="text-center" />

      <Section width="lg" align="center" py="20" bg="gray">
        <h2>Angaben gemäß § 5 TMG</h2>

        <p>
          Dmitrij Kiltau
          <br />
          Sachsen-Anhalt
          <br />
          Deutschland
        </p>

        <h3>Kontakt</h3>

        <p>
          E-Mail: <a href="mailto:info@kiltau.com">info@kiltau.com</a>
        </p>
      </Section>
    </DefaultLayout>
  );
}

export default LegalNotice;
