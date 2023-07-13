import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import TextImage from "../../components/TextImage/TextImage";

function Home() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  const sizes = [
    { width: 960, height: 768 },
    { width: 768, height: 960 },
    { width: 1024, height: 1280 },
    { width: 1080, height: 1080 },
  ];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const image = {
    src: `https://picsum.photos/${randomSize.width}/${randomSize.height}`,
    width: randomSize.width,
    height: randomSize.height,
  };

  return (
    <DefaultLayout>
      <TextImage image={image} height="full">
        <h1>{t("home.title")}</h1>
        <h4>{t("home.subtitle")}</h4>
        <p>{t("home.description")}</p>
      </TextImage>
    </DefaultLayout>
  );
}

export default Home;
