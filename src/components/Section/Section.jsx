import { nanoid } from "nanoid";
import "./Section.scss";

function Section(props) {
  const { id, className, width, bg, my, mt, mb, py, pt, pb, children } = props;

  const marginY = my ? `my-${my}` : false;
  const marginTop = mt ? `mt-${mt}` : false;
  const marginBottom = mb ? `mb-${mb}` : false;
  const marginClass = [marginY, marginTop, marginBottom];

  const paddingY = py ? `py-${py}` : false;
  const paddingTop = pt ? `pt-${pt}` : false;
  const paddingBottom = pb ? `pb-${pb}` : false;
  const paddingClass = [paddingY, paddingTop, paddingBottom];

  const classNames = [
    "section",
    className,
    width ?? false,
    bg ? `bg-${bg}` : false,
    ...marginClass,
    ...paddingClass,
  ]
    .filter((item) => item !== false)
    .map((item, index) => (index < 2 ? item : `section__${item}`))
    .join(" ");

  return (
    <section id={id ?? nanoid()} class={classNames}>
      <div class="section-container">{children}</div>
    </section>
  );
}

export default Section;
