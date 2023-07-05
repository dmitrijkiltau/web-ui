import { useI18n } from "@amoutonbrady/solid-i18n";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import TextImage from "../../components/TextImage/TextImage";
import { useTranslation } from "../../hooks/useTranslation";

function Home() {
  const [t, { locale }] = useI18n();

  useTranslation(locale);
  
  const sizes = [
    [960, 768],
    [768, 960],
    [1024, 1280],
    [1080, 1080],
  ];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const imageUrl = `https://picsum.photos/${randomSize.join("/")}`;

  return (
    <DefaultLayout>
      <TextImage imageSrc={imageUrl}>
        <h1>{t("home.title")}</h1>
        <h4>{t("home.subtitle")}</h4>
        <p>{t("home.description")}</p>
      </TextImage>

      <Section width="medium" bg="gray" py="large">
            <h2>ImageSlider</h2>
      </Section>
    </DefaultLayout>
  );
}

export default Home;
