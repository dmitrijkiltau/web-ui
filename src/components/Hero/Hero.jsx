import Section from "../Section/Section";
import "./Hero.scss";

function Hero(props) {
  const { title, align, bg, children } = props;

  let width = "large";
  let className = "c-hero";

  if (align === "center") {
    width = "small";
    className += " align-center";
  }

  return (
    <Section className={className} width={width} py="x-large" bg={bg}>
      <div class="c-container">
        <h1>{title}</h1>
        {children}
      </div>
    </Section>
  );
}

export default Hero;
