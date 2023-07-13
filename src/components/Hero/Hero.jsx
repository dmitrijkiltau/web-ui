import { classnames } from "../../helper/classnames";
import Section from "../Section/Section";

function Hero(props) {
  const { title, className, align, height, bg, children } = props;
  const classNames = classnames(["c-hero", className ?? false]);

  let width = "sm";

  return (
    <Section
      className={classNames}
      width={width}
      height={height}
      align={align}
      py="x-large"
      bg={bg}
    >
      <div class="c-container">
        <h1>{title}</h1>
        {children}
      </div>
    </Section>
  );
}

export default Hero;
