import { nanoid } from "nanoid";
import { classnames } from "../../helper/classnames";

function Grid(props) {
  const { id, className, gap = true, children } = props;

  const classNames = classnames([
    "@container grid grid-cols-12",
    className ?? false,
    gap ? "gap-2 md:gap-4" : false,
  ]);

  return (
    <div id={id ?? nanoid()} class={classNames}>
      {children}
    </div>
  );
}

export default Grid;
