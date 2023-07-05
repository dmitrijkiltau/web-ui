import { useI18n } from "@amoutonbrady/solid-i18n";
import { useBasePath } from "../../hooks/useTranslation";
import { addPassiveListener } from "../../helper/passiveListener";
import logo from "../../logo.svg";
import { IconClose, IconMenu } from "../../icons/Icons";
import Section from "../Section/Section";
import { menuItems } from "../../data/menuItems";
import MenuItem from "../MenuItem/MenuItem";
import "./Header.scss";

function Header() {
  const [t] = useI18n();
  const basePath = useBasePath();
  addPassiveListener(window, "DOMContentLoaded", initHeader);

  return (
    <header id="main-header">
      <Section className="header" width="medium" bg="white">
        <a href={basePath} id="main-logo" aria-label="Kiltau Logo">
          <img src={logo} alt="logo" />
        </a>

        <nav id="main-menu">
          <menu>
            <For each={menuItems}>{(item) => <MenuItem {...item} />}</For>
          </menu>
        </nav>

        <button id="mobile-menu-toggle" data-identifier="main-menu">
          <IconMenu />
          <IconClose />
        </button>
      </Section>

      <Section
        id="main-flyout"
        width="medium"
        bg="white"
        pt="medium"
        pb="large"
      >
        <div id="mobile-menu" class="flyout-item" data-identifier="main-menu">
          <div class="flyout-item-container">
            <nav class="flyout-menu">
              <menu class={menuItems.length > 4 ? "as-grid" : null}>
                <For each={menuItems}>{(item) => <MenuItem {...item} />}</For>
              </menu>
            </nav>
          </div>
        </div>

        <For each={menuItems}>
          {(item) => (
            <Show when={item.subItems}>
              <div class="flyout-item" data-identifier={item.id}>
                <div class="flyout-item-container">
                  <Show when={item.teaserTitle || item.teaserText}>
                    <div class="flyout-content">
                      <Show when={item.teaserTitle}>
                        <h2>{t(`menuItem.${item.teaserTitle}`)}</h2>
                      </Show>

                      <Show when={item.teaserText}>
                        <p>{t(`menuItem.${item.teaserText}`)}</p>
                      </Show>
                    </div>
                  </Show>

                  <nav class="flyout-menu">
                    <menu class={item.subItems.length > 4 ? "as-grid" : null}>
                      <For each={item.subItems}>
                        {(subItem) => <MenuItem {...subItem} />}
                      </For>
                    </menu>
                  </nav>
                </div>
              </div>
            </Show>
          )}
        </For>
      </Section>

      <div id="flyout-overlay"></div>
    </header>
  );
}

function initHeader() {
  const header = document.querySelector("#main-header");
  if (!header) return;

  const mobileMenuToggle = header.querySelector("#mobile-menu-toggle");
  const mainMenuItems = header.querySelectorAll(
    "#main-menu .menu-item, #mobile-menu .menu-item"
  );
  const flyout = header.querySelector("#main-flyout");
  const flyoutItems = header.querySelectorAll("#main-flyout .flyout-item");
  const flyoutOverlay = header.querySelector("#flyout-overlay");
  let initialOpen = true;

  if (
    !mobileMenuToggle ||
    mainMenuItems.length === 0 ||
    !flyout ||
    flyoutItems.length === 0 ||
    !flyoutOverlay
  )
    return;

  for (const menuItem of mainMenuItems) {
    addPassiveListener(menuItem, "click", () => {
      const identifier = menuItem.dataset.identifier;
      identifier ? openFlyout(identifier) : closeFlyout();
    });
  }

  addPassiveListener(mobileMenuToggle, "click", () => {
    const identifier = mobileMenuToggle.dataset.identifier;
    if (mobileMenuToggle.classList.contains("active")) closeFlyout();
    else if (identifier) openFlyout(identifier);
  });
  addPassiveListener(flyoutOverlay, "click", closeFlyout);
  addPassiveListener(document, "keydown", (event) => {
    if (event.key === "Escape") closeFlyout();
  });
  addPassiveListener(window, "resize", () => {
    adjustFlyoutHeight();
    const mobileMenuOpen = header.querySelector("#mobile-menu.active") || false;
    if (window.innerWidth >= 640 && mobileMenuOpen) closeFlyout();
  });

  function openFlyout(identifier) {
    for (const menuItem of mainMenuItems) {
      toggleElementByIdentifier(menuItem, identifier);
    }

    for (const flyoutItem of flyoutItems) {
      toggleElementByIdentifier(flyoutItem, identifier);
    }

    if (!initialOpen) adjustFlyoutHeight();

    flyout.classList.add("active");
    flyoutOverlay.classList.add("active");
    mobileMenuToggle.classList.add("active");

    initialOpen = false;
  }

  function adjustFlyoutHeight() {
    const activeFlyoutItem = [...flyoutItems].filter((item) =>
      item.classList.contains("active")
    )[0];

    if (!activeFlyoutItem) return;

    const activeFlyoutItemHeight =
      activeFlyoutItem.querySelector(".flyout-item-container")?.scrollHeight ||
      "0fr";

    for (const flyoutItem of flyoutItems) {
      flyoutItem.style.setProperty(
        "--flyout-item-height",
        `${activeFlyoutItemHeight}px`
      );
    }
  }

  function closeFlyout() {
    for (const menuItem of mainMenuItems) {
      menuItem.classList.remove("active");
    }

    flyout.classList.remove("active");
    flyoutOverlay.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  }
}

function toggleElementByIdentifier(element, identifier) {
  element.classList.toggle("active", element.dataset.identifier === identifier);
}

export default Header;
