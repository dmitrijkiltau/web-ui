export function classnames(arr) {
  return arr
    .filter((item) => item !== false)
    .map((item, index) => (index === 0 ? item : item))
    .join(" ");
}
