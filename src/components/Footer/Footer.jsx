import { nanoid } from "nanoid";
import Section from "../Section/Section";
import MenuItem from "../Menu/MenuItem";
import "./Footer.scss";

const menuItems = [
  {
    id: nanoid(),
    name: "FAQ",
    link: "/faq",
    target: "_self",
  },
  {
    id: nanoid(),
    name: "Contact",
    link: "/contact",
    target: "_self",
  },
];

const legalMenuItems = [
  {
    id: nanoid(),
    name: "Legal Notice",
    link: "/legal-notice",
    target: "_self",
  },
  {
    id: nanoid(),
    name: "Privacy Policy",
    link: "/privacy-policy",
    target: "_self",
  },
];

function initFooter() {
  const footerDate = document.querySelector("#footer-date");
  if (!footerDate) return;
  footerDate.textContent = new Date().getFullYear();
}

function Footer() {
  window.addEventListener("DOMContentLoaded", initFooter, { passive: true });

  return (
    <footer id="main-footer">
      <Section id="footer-container" width="large" bg="dark" py="large">
        <div class="footer-item">
          <h4>What's a Footer?</h4>
          <p>
            A footer is an integral part of every webpage, typically located at
            the bottom. It consistently provides information and links across
            the site, often containing key details such as contact info, privacy
            policies, terms of use, and links to other significant pages.
          </p>
        </div>

        <div class="footer-item">
          <h4>Footer's Role</h4>
          <p>
            The footer plays a crucial role in user navigation and information.
            Often overlooked, it serves as a "safety net" for visitors unable to
            find what they're seeking. A well-designed footer aids users in
            navigating the website, quickly locating vital information, and
            fostering trust by providing important company details and legal
            information.
          </p>
        </div>

        <div class="footer-item">
          <h4>More</h4>

          <menu class="footer-menu">
            <For each={menuItems}>
              {(item) => <MenuItem {...item} showIcon={true} />}
            </For>
          </menu>
        </div>
      </Section>

      <Section id="footer-bar" width="large" bg="dark" pb="large">
        <div class="footer-copyright">
          <span>
            © <span id="footer-date"></span> Dmitrij{" "}
            <a href="https://kiltau.com/">Kiltau</a>.
          </span>
        </div>

        <menu class="footer-bar-menu">
          <For each={legalMenuItems}>{(item) => <MenuItem {...item} />}</For>
        </menu>
      </Section>
    </footer>
  );
}

export default Footer;
