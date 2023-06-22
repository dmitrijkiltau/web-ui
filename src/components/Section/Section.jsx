import { nanoid } from "nanoid";
import "./Section.scss";

function Section(props) {
  const { id, width, bg, my, mt, mb, py, pt, pb, children } = props;

  const widthClass = width ?? false;
  const bgClass = bg ? `bg-${bg}` : false;

  const marginY = my ? `my-${my}` : false;
  const marginTop = mt ? `mt-${mt}` : false;
  const marginBottom = mb ? `mb-${mb}` : false;
  const marginClass = [marginY, marginTop, marginBottom];

  const paddingY = py ? `py-${py}` : false;
  const paddingTop = pt ? `pt-${pt}` : false;
  const paddingBottom = pb ? `pb-${pb}` : false;
  const paddingClass = [paddingY, paddingTop, paddingBottom];

  const className = [
    "section",
    widthClass,
    bgClass,
    ...marginClass,
    ...paddingClass,
  ]
    .filter((item) => item !== false)
    .map((item, index) => (index === 0 ? item : `section__${item}`))
    .join(" ");

  return (
    <section id={id ?? nanoid()} class={className}>
      <div class="section-container">{children}</div>
    </section>
  );
}

export default Section;
