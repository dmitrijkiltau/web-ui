import Section from "../Section/Section";
import "./TextImage.scss";

function TextImage(props) {
  const { image, children } = props;

  return (
    <Section className="c-text-image" width="large" my="large">
      <div class="c-container">{children}</div>
      <img src={image} class="c-image" alt={`Image`} />
    </Section>
  );
}

export default TextImage;
