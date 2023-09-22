import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Section from "../../components/Section/Section";
import { For } from "solid-js";
import Grid from "../../components/Grid/Grid";
import Column from "../../components/Grid/Column/Column";

function Examples() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  const sizes = ["full", "", "xl", "lg", "md", "sm", "xs"];

  return (
    <DefaultLayout>
      <For each={sizes}>
        {(size) => (
          <Section width={size} className="mt-4 mb-4">
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <For each={sizes.slice(2)}>
        {(size) => (
          <Section width={size} align="center" className="mb-4">
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(center, ${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <For each={sizes.slice(2)}>
        {(size) => (
          <Section width={size} align="right" className="mb-4">
            <div class="border-2 border-primary px-4 py-2">
              Section {size ? `(right, ${size})` : ""}
            </div>
          </Section>
        )}
      </For>

      <Section className="mt-4 mb-4">
        <Grid>
          <Column xs="12" sm="6" md="4">1</Column>
          <Column xs="12" sm="6" md="4">2</Column>
          <Column xs="12" sm="6" md="4">3</Column>
        </Grid>
        
        <Grid>
          <Column xs="12" sm="6" md="2">1</Column>
          <Column xs="12" sm="6" md="6">2</Column>
          <Column xs="12" sm="6" md="4">3</Column>
        </Grid>
      </Section>

      <Section className="mt-4 mb-4">
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <h6>Headline 6</h6>
        <p>Paragraph</p>
      </Section>
    </DefaultLayout>
  );
}

export default Examples;
