import Section from "../Section/Section";

function TextImage(props) {
  const { image, height, children } = props;

  return (
    <Section className="c-text-image" width="xl" height={height} my="large">
      <div class="c-container">{children}</div>

      <img
        src={image.src}
        width={image.width}
        height={image.height}
        class="c-image"
        alt={`Image`}
      />
    </Section>
  );
}

export default TextImage;
