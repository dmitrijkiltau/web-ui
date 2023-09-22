import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import TextImage from "../../components/TextImage/TextImage";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column/Column";

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

  const tools = [
    {
      id: "random-number-generator",
      title: "Random Number Generator",
      description: "Generate random numbers",
    },
    {
      id: "aspect-ratio-calculator",
      title: "Aspect Ratio Calculator",
      description: "Calculate aspect ratio",
    },
    {
      id: "password-generator",
      title: "Password Generator",
      description: "Generate random passwords",
    },
    {
      id: "color-converter",
      title: "Color Converter",
      description: "Convert colors",
    },
    {
      id: "base64-encoder-decoder",
      title: "Base64 Encoder / Decoder",
      description: "Encode and decode Base64",
    },
    {
      id: "url-encoder-decoder",
      title: "URL Encoder / Decoder",
      description: "Encode and decode URLs",
    },
    {
      id: "percentages-calculator",
      title: "Percentages Calculator",
      description: "Calculate percentages",
    },
    {
      id: "time-calculator",
      title: "Time Calculator",
      description: "Calculate time",
    },
  ];

  return (
    <DefaultLayout>
      <TextImage image={image}>
        <h1>{t("home.title")}</h1>
        <h2 className="h5">{t("home.subtitle")}</h2>
        <p>{t("home.description")}</p>
      </TextImage>

      <Section
        id="tools"
        width="xl"
        align="center"
        py="large"
        bg="gray"
      >
        <Grid>
          <Column sm="8" md="5" lg="4">
            <h2>{t("home.tools.title")}</h2>
            <p>{t("home.tools.description")}</p>
          </Column>

          <Column sm="12" md="7" lg="8">
            <Grid class="tools">
              <For each={tools}>
                {(item) => (
                  <Column sm="6" md="6" lg="4" className="tool">
                    <h3 class="h6">{item.title}</h3>
                  </Column>
                )}
              </For>
            </Grid>
          </Column>
        </Grid>
      </Section>
    </DefaultLayout>
  );
}

export default Home;
