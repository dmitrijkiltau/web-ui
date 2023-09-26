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
    my, // my-2 my-3 my-4 my-5 my-6 my-7 my-8 my-9 my-10 my-11 my-12 my-14 my-16 my-20 my-24 my-28 my-32 my-36 my-40 my-44 my-48 my-52 my-56 my-60 my-64 my-72 my-80 my-96  
    mt, // mt-2 mt-3 mt-4 mt-5 mt-6 mt-7 mt-8 mt-9 mt-10 mt-11 mt-12 mt-14 mt-16 mt-20 mt-24 mt-28 mt-32 mt-36 mt-40 mt-44 mt-48 mt-52 mt-56 mt-60 mt-64 mt-72 mt-80 mt-96
    mb, // mb-2 mb-3 mb-4 mb-5 mb-6 mb-7 mb-8 mb-9 mb-10 mb-11 mb-12 mb-14 mb-16 mb-20 mb-24 mb-28 mb-32 mb-36 mb-40 mb-44 mb-48 mb-52 mb-56 mb-60 mb-64 mb-72 mb-80 mb-96
    py, // py-2 py-3 py-4 py-5 py-6 py-7 py-8 py-9 py-10 py-11 py-12 py-14 py-16 py-20 py-24 py-28 py-32 py-36 py-40 py-44 py-48 py-52 py-56 py-60 py-64 py-72 py-80 py-96
    pt, // pt-2 pt-3 pt-4 pt-5 pt-6 pt-7 pt-8 pt-9 pt-10 pt-11 pt-12 pt-14 pt-16 pt-20 pt-24 pt-28 pt-32 pt-36 pt-40 pt-44 pt-48 pt-52 pt-56 pt-60 pt-64 pt-72 pt-80 pt-96
    pb, // pb-2 pb-3 pb-4 pb-5 pb-6 pb-7 pb-8 pb-9 pb-10 pb-11 pb-12 pb-14 pb-16 pb-20 pb-24 pb-28 pb-32 pb-36 pb-40 pb-44 pb-48 pb-52 pb-56 pb-60 pb-64 pb-72 pb-80 pb-96
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
    width === "full" ? `width-full` : false,
    height === "full" ? `height-full` : false,
    bg ? `bg-${bg}` : false,
    align ? `align-${align}` : false,
    ...marginClass,
    ...paddingClass,
  ]);

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
