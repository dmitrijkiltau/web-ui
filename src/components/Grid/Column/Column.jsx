import { nanoid } from "nanoid";
import { classnames } from "../../../helper/classnames";

function Column(props) {
  const { id, className, xs, sm, md, lg, xl, xxl, children } = props;

  const classNames = classnames([
    "column",
    className ?? false,
    xs ? `col-span-${xs}` : 'col-span-12', // col-span-12 col-span-11 col-span-10 col-span-9 col-span-8 col-span-7 col-span-6 col-span-5 col-span-4 col-span-3 col-span-2 col-span-1
    sm ? `@sm:col-span-${sm}` : false, // @sm:col-span-12 @sm:col-span-11 @sm:col-span-10 @sm:col-span-9 @sm:col-span-8 @sm:col-span-7 @sm:col-span-6 @sm:col-span-5 @sm:col-span-4 @sm:col-span-3 @sm:col-span-2 @sm:col-span-1
    md ? `@md:col-span-${md}` : false, // @md:col-span-12 @md:col-span-11 @md:col-span-10 @md:col-span-9 @md:col-span-8 @md:col-span-7 @md:col-span-6 @md:col-span-5 @md:col-span-4 @md:col-span-3 @md:col-span-2 @md:col-span-1
    lg ? `@lg:col-span-${lg}` : false, // @lg:col-span-12 @lg:col-span-11 @lg:col-span-10 @lg:col-span-9 @lg:col-span-8 @lg:col-span-7 @lg:col-span-6 @lg:col-span-5 @lg:col-span-4 @lg:col-span-3 @lg:col-span-2 @lg:col-span-1
    xl ? `@xl:col-span-${xl}` : false, // @xl:col-span-12 @xl:col-span-11 @xl:col-span-10 @xl:col-span-9 @xl:col-span-8 @xl:col-span-7 @xl:col-span-6 @xl:col-span-5 @xl:col-span-4 @xl:col-span-3 @xl:col-span-2 @xl:col-span-1
    xxl ? `@2xl:col-span-${xl}` : false, // @2xl:col-span-12 @2xl:col-span-11 @2xl:col-span-10 @2xl:col-span-9 @2xl:col-span-8 @2xl:col-span-7 @2xl:col-span-6 @2xl:col-span-5 @2xl:col-span-4 @2xl:col-span-3 @2xl:col-span-2 @2xl:col-span-1
  ]);

  return (
    <div id={id ?? nanoid()} class={classNames}>
      {children}
    </div>
  );
}

export default Column;