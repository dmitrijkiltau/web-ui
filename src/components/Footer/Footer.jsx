import { useI18n } from "@amoutonbrady/solid-i18n";
import { useBasePath } from "../../hooks/useTranslation";
import { addPassiveListener } from "../../helper/passiveListener";
import { footerMenuItems, legalMenuItems } from "../../data/menuItems";
import Section from "../Section/Section";
import MenuItem from "../MenuItem/MenuItem";

function Footer() {
  const [t] = useI18n();
  const basePath = useBasePath();
  addPassiveListener(window, "DOMContentLoaded", initFooter);

  return (
    <footer id="main-footer" class="cols-2">
      <Section id="footer-container" width="lg" align="center" bg="dark" py="large">
        <div class="footer-item">
          <h4>{t("footer.title1")}</h4>
          <p>{t("footer.description1")}</p>
        </div>

        <div class="footer-item">
          <h4>{t("footer.title2")}</h4>

          <menu class="footer-menu">
            <For each={footerMenuItems}>
              {(item) => <MenuItem {...item} showIcon={true} />}
            </For>
          </menu>
        </div>
      </Section>

      <Section id="footer-bar" width="lg" align="center" bg="dark" pb="large">
        <div class="footer-copyright">
          <span>
            © <span id="footer-date"></span> Dmitrij{" "}
            <a href={basePath} aria-label={t("menuItem.home")}>Kiltau</a>.
          </span>
        </div>

        <menu class="footer-bar-menu">
          <For each={legalMenuItems}>{(item) => <MenuItem {...item} />}</For>
        </menu>
      </Section>
    </footer>
  );
}

function initFooter() {
  const footerDate = document.querySelector("#footer-date");
  if (!footerDate) return;
  footerDate.textContent = new Date().getFullYear();
}

export default Footer;
