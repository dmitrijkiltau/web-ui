import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import { For } from "solid-js";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import TextImage from "../../components/TextImage/TextImage";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column/Column";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

function Home() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  const imageSizes = [
    { width: 960, height: 768 },
    { width: 768, height: 960 },
    { width: 1024, height: 1280 },
    { width: 1080, height: 1080 },
  ];
  const randomSize = imageSizes[Math.floor(Math.random() * imageSizes.length)];
  const image = {
    src: `https://picsum.photos/${randomSize.width}/${randomSize.height}`,
    width: randomSize.width,
    height: randomSize.height,
  };

  const sizes = ["full", "", "xl", "lg", "md", "sm", "xs"];
  const columns = ["12", "2", "10", "4", "8", "6", "6", "8", "4", "10", "2"];

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
      <TextImage image={image}>
        <h1>{t("home.title")}</h1>
        <h2 className="h5">
          <a href="https://github.com/dmitrijkiltau/web-ui">
            github.com/dmitrijkiltau/web-ui
          </a>
        </h2>
        <p>{t("home.description")}</p>
      </TextImage>

      <Section my="20" py="20" bg="dark">
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
        <p>Paragraph</p>
      </Section>

      <Section mb="4">
        <h2>Sections</h2>
      </Section>

      <For each={sizes}>
        {(size) => (
          <Section width={size} mb="4">
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <Section mt="20" pt="20" pb="4" bg="gray">
        <h2 class="text-center">Sections (centered)</h2>
      </Section>

      <For each={sizes.slice(2)}>
        {(size) => (
          <Section
            width={size}
            align="center"
            pb={size === "xs" ? 20 : 4}
            bg="gray"
          >
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(center, ${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <Section mt="20" mb="4">
        <h2 class="text-end">Sections (end)</h2>
      </Section>

      <For each={sizes.slice(2)}>
        {(size) => (
          <Section width={size} align="right" mb="4">
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(right, ${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <Section py="20" bg="gray">
        <h2>Grid with Columns</h2>

        <Grid>
          <For each={columns}>
            {(size) => (
              <Column sm={size} className="border-2 border-primary px-4 py-2">
                {size}
              </Column>
            )}
          </For>
        </Grid>
      </Section>

      <Section width="xl" align="center" bg="dark" py="20">
        <h2>ImageSlider</h2>
        <p>ImageSlider is a component that displays a list of images in a slider.</p>
        <ImageSlider images={sliderImages} />
      </Section>
    </DefaultLayout>
  );
}

export default Home;
