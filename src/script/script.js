window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
});

function initHeader() {
  const header = document.querySelector('#main-header');
  if (!header) return;

  const mobileMenuToggle = header.querySelector('#mobile-menu-toggle');
  const mainMenuItems = header.querySelectorAll('#main-menu .menu-item, #mobile-menu .menu-item');
  const flyout = header.querySelector('#main-flyout');
  const flyoutItems = header.querySelectorAll('#main-flyout .flyout-item');
  const flyoutOverlay = header.querySelector('#flyout-overlay');

  if (
    !mobileMenuToggle || mainMenuItems.length === 0 ||
    !flyout || flyoutItems.length === 0 || !flyoutOverlay
  ) return;

  for (const menuItem of mainMenuItems) {
    menuItem.addEventListener('click', () => {
      const identifier = menuItem.dataset.identifier;
      (identifier) ? openFlyout(identifier) : closeFlyout();
    }, { passive: true });
  }

  mobileMenuToggle.addEventListener('click', () => {
    const identifier = mobileMenuToggle.dataset.identifier;
    if (mobileMenuToggle.classList.contains('active')) closeFlyout();
    else if (identifier) openFlyout(identifier);
  }, { passive: true });

  flyoutOverlay.addEventListener('click', closeFlyout, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeFlyout();
  }, { passive: true });

  function openFlyout(identifier) {
    for (const menuItem of mainMenuItems) {
      toggleElementByIdentifier(menuItem, identifier);
    }

    for (const flyoutItem of flyoutItems) {
      toggleElementByIdentifier(flyoutItem, identifier);
    }

    flyout.classList.add('active');
    flyoutOverlay.classList.add('active');
    mobileMenuToggle.classList.add('active');
  }

  function closeFlyout() {
    for (const menuItem of mainMenuItems) {
      menuItem.classList.remove('active');
    }

    flyout.classList.remove('active');
    flyoutOverlay.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  }
}

function toggleElementByIdentifier(element, identifier) {
  element.classList.toggle('active', element.dataset.identifier === identifier);
}

function initFooter() {
  initFooterDate();
}

function initFooterDate() {
  const footerDate = document.querySelector('#footer-date');
  if (!footerDate) return;
  footerDate.textContent = new Date().getFullYear();
}