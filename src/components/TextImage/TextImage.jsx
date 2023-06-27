import Section from "../Section/Section";
import "./TextImage.scss";

function TextImage(props) {
  const { imageSrc, children } = props;

  return (
    <Section className="c-text-image" width="large" my="large">
      <div class="c-container">
        {children}
      </div>

      <img src={imageSrc} class="c-image" />
    </Section>
  );
}

export default TextImage;
