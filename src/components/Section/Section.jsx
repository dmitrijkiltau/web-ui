import { nanoid } from "nanoid";
import { classnames } from "../../helper/classnames";

function Section(props) {
  const { id, className, width, height, align, bg, my, mt, mb, py, pt, pb, children } =
    props;

  const marginY = my ? `my-${my}` : false;
  const marginTop = mt ? `mt-${mt}` : false;
  const marginBottom = mb ? `mb-${mb}` : false;
  const marginClass = [marginY, marginTop, marginBottom];

  const paddingY = py ? `py-${py}` : false;
  const paddingTop = pt ? `pt-${pt}` : false;
  const paddingBottom = pb ? `pb-${pb}` : false;
  const paddingClass = [paddingY, paddingTop, paddingBottom];

  const classNames = classnames([
    "section",
    className ?? false,
    width ? `size-${width}` : false,
    height === "full" ? `height-full` : false,
    bg ? `bg-${bg}` : false,
    align ? `align-${align}` : false,
    ...marginClass,
    ...paddingClass,
  ]);

  return (
    <section id={id ?? nanoid()} class={classNames}>
      <div class="section-container">{children}</div>
    </section>
  );
}

export default Section;
