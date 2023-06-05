window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
});

function initHeader() {
  const header = document.querySelector('#main-header');
  if (!header) return;

  const mainMenu = document.querySelector('#main-menu');
  const mainMenuItems = document.querySelectorAll('#main-menu .menu-item');
  const flyout = document.querySelector('#main-flyout');
  const flyoutItems = document.querySelectorAll('#main-flyout .flyout-item');
  const flyoutOverlay = document.querySelector('#flyout-overlay');

  if (mainMenu && mainMenuItems.length > 0 && flyout && flyoutItems.length > 0 && flyoutOverlay) {
    initMainMenu(mainMenu, mainMenuItems, flyout, flyoutItems, flyoutOverlay);
  }
}

function initMainMenu(mainMenu, mainMenuItems, flyout, flyoutItems, flyoutOverlay) {
  for (const menuItem of mainMenuItems) {
    menuItem.addEventListener('click', () => {
      const identifier = menuItem.dataset.identifier;
      (identifier) ? openFlyout(identifier) : closeFlyout();
    }, { passive: true });
  }

  flyoutOverlay.addEventListener('click', closeFlyout, { passive: true });

  function openFlyout(identifier) {
    for (const menuItem of mainMenuItems) {
      menuItem.classList.toggle('active', menuItem.dataset.identifier === identifier);
    }

    for (const flyoutItem of flyoutItems) {
      flyoutItem.classList.toggle('active', flyoutItem.dataset.identifier === identifier);
    }

    flyout.classList.add('active');
    flyoutOverlay.classList.add('active');
  }

  function closeFlyout() {
    for (const menuItem of mainMenuItems) {
      menuItem.classList.remove('active');
    }

    flyout.classList.remove('active');
    flyoutOverlay.classList.remove('active');
  }
}

function initFooter() {
  initFooterDate();
}

function initFooterDate() {
  const footerDate = document.querySelector('#footer-date');
  if (!footerDate) return;
  footerDate.textContent = new Date().getFullYear();
}