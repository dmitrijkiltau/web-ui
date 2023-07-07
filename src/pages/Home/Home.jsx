import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import TextImage from "../../components/TextImage/TextImage";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

function Home() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  const sliderImages = [
    { width: 960, height: 768 },
    { width: 768, height: 960 },
    { width: 1024, height: 1280 },
    { width: 1080, height: 1080 },
  ];
  const randomImage = sliderImages[Math.floor(Math.random() * sliderImages.length)];
  const image = {
    src: `https://picsum.photos/${randomImage.width}/${randomImage.height}`,
    width: randomImage.width,
    height: randomImage.height,
  };

  sliderImages.forEach((image, i) => {
    image.src = `https://picsum.photos/${image.width}/${image.height}?r=${i}`;
  });

  return (
    <DefaultLayout>
      <TextImage image={image}>
        <h1>{t("home.title")}</h1>
        <h4>{t("home.subtitle")}</h4>
        <p>{t("home.description")}</p>
      </TextImage>

      <Section width="medium" bg="gray" py="large">
        <h2>ImageSlider</h2>

        <ImageSlider images={sliderImages} />
      </Section>
    </DefaultLayout>
  );
}

export default Home;
