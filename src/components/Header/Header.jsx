import { nanoid } from "nanoid";
import logo from "../../logo.svg";
import { IconClose, IconMenu } from "../../icons/Icons";
import MenuItem from "../Menu/MenuItem";
import "./Header.scss";

const menuItems = [
  {
    id: nanoid(),
    name: "Start",
    link: "/",
    target: "_self",
  },
  {
    id: nanoid(),
    name: "About",
    subItems: [
      {
        id: nanoid(),
        name: "FAQ",
        link: "#",
        target: "_self",
      },
      {
        id: nanoid(),
        name: "More",
        link: "#",
        target: "_self",
      },
      {
        id: nanoid(),
        name: "Contact",
        link: "#",
        target: "_self",
      },
    ],
    teaserTitle: "About us",
    teaserText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: nanoid(),
    name: "Social",
    subItems: [
      {
        id: nanoid(),
        name: "Github",
        link: "https://github.com/dmitrijkiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "Twitter",
        link: "https://twitter.com/einfachdima",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "Instagram",
        link: "https://instagram.com/einfach.dima",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dmitrij-kiltau-70bb4b1bb",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "Xing",
        link: "https://www.xing.com/profile/Dmitrij_Kiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "PayPal",
        link: "https://paypal.me/kiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "Quora",
        link: "https://de.quora.com/profile/Dmitrij-Kiltau",
        target: "_blank",
      },
      {
        id: nanoid(),
        name: "Facebook",
        link: "https://facebook.com/dmitrijkiltau",
        target: "_blank",
      },
    ],
  },
];

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

  if (
    !mobileMenuToggle ||
    mainMenuItems.length === 0 ||
    !flyout ||
    flyoutItems.length === 0 ||
    !flyoutOverlay
  )
    return;

  for (const menuItem of mainMenuItems) {
    menuItem.addEventListener(
      "click",
      () => {
        const identifier = menuItem.dataset.identifier;
        identifier ? openFlyout(identifier) : closeFlyout();
      },
      { passive: true }
    );
  }

  mobileMenuToggle.addEventListener(
    "click",
    () => {
      const identifier = mobileMenuToggle.dataset.identifier;
      if (mobileMenuToggle.classList.contains("active")) closeFlyout();
      else if (identifier) openFlyout(identifier);
    },
    { passive: true }
  );

  flyoutOverlay.addEventListener("click", closeFlyout, { passive: true });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") closeFlyout();
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
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

    adjustFlyoutHeight();
    flyout.classList.add("active");
    flyoutOverlay.classList.add("active");
    mobileMenuToggle.classList.add("active");
  }

  function adjustFlyoutHeight() {
    const activeFlyoutItem = [...flyoutItems].filter((item) =>
      item.classList.contains("active")
    )[0];

    if (!activeFlyoutItem) return;

    const currentFlyoutItemHeight =
      activeFlyoutItem.querySelector(".flyout-item-container")?.scrollHeight ||
      "0fr";

    for (const flyoutItem of flyoutItems) {
      flyoutItem.style.setProperty(
        "--flyout-item-height",
        `${currentFlyoutItemHeight}px`
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

function Header() {
  window.addEventListener("DOMContentLoaded", initHeader, { passive: true });

  return (
    <header id="main-header">
      <div class="header">
        <div class="header-container">
          <a href="/" id="main-logo">
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
        </div>
      </div>

      <div id="main-flyout">
        <div class="flyout-container">
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
                          <h3>{item.teaserTitle}</h3>
                        </Show>

                        <Show when={item.teaserText}>
                          <p>{item.teaserText}</p>
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
        </div>
      </div>

      <div id="flyout-overlay"></div>
    </header>
  );
}

export default Header;
