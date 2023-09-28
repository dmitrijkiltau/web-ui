import Section from "../Section/Section";
import Grid from "../Grid/Grid";

function TextImage(props) {
  const { image, height, children } = props;

  return (
    <Section className="c-text-image" height={height} my="20">
      <Grid>
        <div class="c-content">{children}</div>

        <img
          src={image.src}
          width={image.width}
          height={image.height}
          class="c-image"
          alt={`Image`}
        />
      </Grid>
    </Section>
  );
}

export default TextImage;
