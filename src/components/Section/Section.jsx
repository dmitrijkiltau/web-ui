import { nanoid } from "nanoid";
import { classnames } from "../../helper/classnames";
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

  const classNames = classnames([
    "section" + (className ? ` ${className}` : ""),
    width ?? false,
    bg ? `bg-${bg}` : false,
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
