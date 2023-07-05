export function addPassiveListener(element, event, callback) {
  element.addEventListener(event, callback, { passive: true });
}

export function removePassiveListener(element, event, callback) {
  element.removeEventListener(event, callback, { passive: true });
}
