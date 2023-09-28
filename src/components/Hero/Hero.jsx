import { classnames } from "../../helper/classnames";
import Section from "../Section/Section";

function Hero(props) {
  const { title, className, align, height, bg, children } = props;

  const classNames = classnames([
    "c-hero",
    className ?? false
  ]);

  return (
    <Section
      className={classNames}
      containerClassName="@sm:col-span-8 @sm:col-start-3 @md:col-span-6 @md:col-start-4"
      width="xl"
      height={height}
      align={align}
      py="32"
      bg={bg}
    >
      <h1>{title}</h1>
      {children}
    </Section>
  );
}

export default Hero;
