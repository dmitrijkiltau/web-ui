import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

function About() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  const sliderImages = [];

  for (let i = 0; i < 4; i++) {
    sliderImages.push({
      src: `https://picsum.photos/1280/720?r=${i}`,
      width: 1280,
      height: 720,
    });
  }

  return (
    <DefaultLayout>
      <Hero title={t("about.title")} align="center" bg="gray">
        <p>{t("about.description")}</p>
      </Hero>

      <Section width="medium" bg="dark" py="large">
        <h2>ImageSlider</h2>
        <p>
          ImageSlider is a component that displays a list of images in a slider.
        </p>
        <ImageSlider images={sliderImages} />
      </Section>
    </DefaultLayout>
  );
}

export default About;
