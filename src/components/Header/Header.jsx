import { useI18n } from "@amoutonbrady/solid-i18n";
import { useBasePath } from "../../hooks/useTranslation";
import { addPassiveListener } from "../../helper/passiveListener";
import logo from "../../logo.svg";
import { IconArrowRight, IconClose, IconMenu } from "../../icons/Icons";
import Section from "../Section/Section";
import { menuItems } from "../../data/menuItems";
import MenuItem from "../MenuItem/MenuItem";

function Header() {
  const [t] = useI18n();
  const basePath = useBasePath();
  addPassiveListener(window, "DOMContentLoaded", initHeader);

  return (
    <header id="main-header">
      <Section className="header" width="lg" align="center" bg="white">
        <a href={basePath} id="main-logo" aria-label={t("menuItem.home")}>
          <img src={logo} alt="Logo" />
        </a>

        <nav id="main-menu">
          <menu>
            <For each={menuItems}>{(item) => <MenuItem {...item} />}</For>
          </menu>
        </nav>

        <button
          id="mobile-menu-toggle"
          data-identifier="main-menu"
          aria-label={t("header.menuOpen")}
          data-open-label={t("header.menuOpen")}
          data-close-label={t("header.menuClose")}
        >
          <IconMenu />
          <IconClose />
        </button>
      </Section>

      <Section
        id="main-flyout"
        width="lg"
        align="center"
        bg="white"
        pt="medium"
        pb="large"
      >
        <div
          id="mobile-menu"
          class="flyout-item active"
          data-identifier="main-menu"
        >
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
                  <div class="flyout-content">
                    <h3 class="c-title">
                      <button
                        class="menu-back"
                        aria-label={t("header.menuBack")}
                      >
                        <IconArrowRight />
                      </button>

                      <Show when={item.teaserTitle}>
                        <span>{t(`menuItems.${item.teaserTitle}`)}</span>
                      </Show>
                    </h3>

                    <Show when={item.teaserText}>
                      <p>{t(`menuItems.${item.teaserText}`)}</p>
                    </Show>
                  </div>

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
  const backButtons = header.querySelectorAll(".menu-back");
  const flyout = header.querySelector("#main-flyout");
  const flyoutItems = header.querySelectorAll("#main-flyout .flyout-item");
  const flyoutOverlay = header.querySelector("#flyout-overlay");
  let initialOpen = true;
  let previousFlyoutIdentifier = null;

  if (
    !mobileMenuToggle ||
    mainMenuItems.length === 0 ||
    !flyout ||
    flyoutItems.length === 0 ||
    !flyoutOverlay
  ) {
    return;
  }

  for (const menuItem of mainMenuItems) {
    addPassiveListener(menuItem, "click", () => {
      const identifier = menuItem.dataset.identifier;
      adjustFlyoutHeight(menuItem);
      identifier ? openFlyout(identifier) : closeFlyout();
    });
  }

  for (const backButton of backButtons) {
    addPassiveListener(backButton, "click", () => {
      openFlyout(previousFlyoutIdentifier);
    });
  }

  addPassiveListener(mobileMenuToggle, "click", () => {
    const identifier = mobileMenuToggle.dataset.identifier;
    let label = mobileMenuToggle.getAttribute("aria-label");

    if (mobileMenuToggle.classList.contains("active")) {
      closeFlyout();
      label = mobileMenuToggle.dataset.closeLabel;
    } else {
      label = mobileMenuToggle.dataset.openLabel;
      if (identifier) {
        previousFlyoutIdentifier = identifier;
        openFlyout(identifier);
      }
    }

    mobileMenuToggle.setAttribute("aria-label", label);
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

  function adjustFlyoutHeight(element) {
    const activeFlyoutItem =
      element ??
      [...flyoutItems].filter((item) => item.classList.contains("active"))[0];

    const activeFlyoutItemHeight =
      activeFlyoutItem?.querySelector(".flyout-item-container")?.scrollHeight ||
      "0fr";

    for (const flyoutItem of flyoutItems) {
      flyoutItem.style.setProperty(
        "--flyout-item-height",
        `${activeFlyoutItemHeight}px`
      );
    }
  }

  function closeFlyout() {
    for (const item of header.querySelectorAll(".active:not(.flyout-item)")) {
      item.classList.remove("active");
    }
  }
}

function toggleElementByIdentifier(element, identifier) {
  element.classList.toggle("active", element.dataset.identifier === identifier);
}

export default Header;
