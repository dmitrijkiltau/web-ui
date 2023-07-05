import { useTranslation } from "../../hooks/useTranslation";
import { useI18n } from "@amoutonbrady/solid-i18n";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import TextImage from "../../components/TextImage/TextImage";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import NotFound from "../NotFound/NotFound";

function Home() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);
  if (locale() === "en" && window.location.pathname !== "/") {
    return <NotFound />;
  }

  const sizes = [
    [960, 768],
    [768, 960],
    [1024, 1280],
    [1080, 1080],
  ];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const image = `https://picsum.photos/${randomSize.join("/")}`;

  const sliderImages = [];

  for (let i = 0; i < 5; i++) {
    sliderImages.push(`https://picsum.photos/1280/720?random=${i}`);
  }

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
