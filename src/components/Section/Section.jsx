import { nanoid } from "nanoid";
import { classnames } from "../../helper/classnames";
import Grid from "../Grid/Grid";

function Section(props) {
  const {
    id,
    className,
    width,
    height,
    align,
    bg,
    my,
    mt,
    mb,
    py,
    pt,
    pb,
    children,
  } = props;

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
    height === "full" ? `height-full` : false,
    height === "full" ? `height-full` : false,
    bg ? `bg-${bg}` : false,
    align ? `align-${align}` : false,
    ...marginClass,
    ...paddingClass,
  ]);

  // Comments for tailwindcss to generate the classes
  const col = {
    xs: {
      span: 2, // col-span-2
      centerStart: 6, // col-start-6
      endStart: 11, // col-start-11
    },
    sm: {
      span: 4, // col-span-4
      centerStart: 5, // col-start-5
      endStart: 9, // col-start-9
    },
    md: {
      span: 6, // col-span-6
      centerStart: 4, // col-start-4
      endStart: 7, // col-start-7
    },
    lg: {
      span: 8, // col-span-8
      centerStart: 3, // col-start-3
      endStart: 5, // col-start-5
    },
    xl: {
      span: 10, // col-span-10
      centerStart: 2, // col-start-2
      endStart: 3, // col-start-3
    }
  };

  const containerClassNames = classnames([
    "section-content",
    `col-span-${col[width]?.span ?? 12}`,
    align && getAlignClass(width, align),
  ]);

  function getAlignClass(size, align) {
    if (align === "center") {
      return `col-start-${col[size]?.centerStart ?? 0}`;
    } else if (align === "end" || align === "right") {
      return `col-start-${col[size]?.endStart ?? 0}`;
    } else {
      return false;
    }
  }

  return (
    <section id={id ?? nanoid()} class={classNames}>
      <Grid className="section-container">
        <div class={containerClassNames}>{children}</div>
      </Grid>
    </section>
  );
}

export default Section;
