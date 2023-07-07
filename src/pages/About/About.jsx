import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
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
    })
  }

  return (
    <DefaultLayout>
      <Section width="small" bg="gray" py="large">
        <h2>{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </Section>

      <Section width="medium" bg="dark" py="large">
        <h2>ImageSlider</h2>
        <p>ImageSlider is a component that displays a list of images in a slider.</p>
        <ImageSlider images={sliderImages} />
      </Section>
    </DefaultLayout>
  );
}

export default About;
