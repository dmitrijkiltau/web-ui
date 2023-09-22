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
    </DefaultLayout>
  );
}

export default Examples;
