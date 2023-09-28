import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import { For } from "solid-js";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column/Column";

function Examples() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  const sizes = ["full", "", "xl", "lg", "md", "sm", "xs"];
  const columns = ["12", "2", "10", "4", "8", "6", "6", "8", "4", "10", "2"];

  return (
    <DefaultLayout>
      <Section my="10">
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

      <Section mt="10" mb="4">
        <h2 class="text-center">Sections centered</h2>
      </Section>

      <For each={sizes.slice(2)}>
        {(size) => (
          <Section width={size} align="center" mb="4">
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(center, ${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <Section mt="10" mb="4">
        <h2 class="text-end">Sections end</h2>
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

      <Section mt="10" mb="8">
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
    </DefaultLayout>
  );
}

export default Examples;
