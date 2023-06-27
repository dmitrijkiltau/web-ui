import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import TextImage from "./components/TextImage/TextImage";

function App() {
  const sizes = [
    [960, 768],
    [768, 960],
    [1024, 1280],
    [1080, 1080],
  ];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const imageUrl = `https://picsum.photos/${randomSize.join("/")}`;

  return (
    <>
      <Header />

      <main>
        <TextImage imageSrc={imageUrl}>
          <h1>Scratch at door to be let outside</h1>
          <h4>Refuse to drink water except out of someone's glass</h4>
          <p>
            Climb into cupboard and lick the salt off rice cakes but nyan nyan
            goes the cat, scraaaaape scraaaape goes the walls when the cat
            murders them with its claws catasstrophe fall asleep on the washing
            machine. Pounce on unsuspecting person cat fur is the new black and
            cat jumps and falls onto the couch purrs and wakes up in a new
            dimension filled with kitty litter meow meow yummy there is a bunch
            of cats hanging around eating catnip.
          </p>
        </TextImage>

        <Section width="medium" bg="gray" py="large">
          <h2>Stare out the window</h2>
          <p>
            Couch so floof tum, tickle bum, jellybean footies curly toes cats go
            for world domination tweeting a baseball avoid the new toy and just
            play with the box it came in thinking about you i'm joking it's food
            always food.
          </p>
          <p>
            Meow meow eat and than sleep on your face. Reaches under door into
            adjacent room instantly break out into full speed gallop across the
            house for no reason but go crazy with excitement.
          </p>
        </Section>

        <Section width="small" my="large">
          <h2>You can have that back now scratch at door to be let outside</h2>
          <p>
            Pee in human's bed until he cleans the litter box under the bed, for
            at four in the morning wake up owner meeeeeeooww scratch at legs and
            beg for food then cry and yowl until they wake up at two pm jump on
            window and sleep while observing the bootyful cat next door that u
            really like but who already has a boyfriend end up making babies
            with her and let her move in eat too much then proceed to
            regurgitate all over living room carpet while humans eat dinner
            pounce on unsuspecting person or meow meow, i tell my human. Snob
            you for another person. Cat meoooow i iz master of hoomaan, not
            hoomaan master of i, oooh damn dat dog dismember a mouse and then
            regurgitate parts of it on the family room floor. Poop in the plant
            pot snob you for another person and behind the couch trip on catnip
            but warm up laptop with butt lick butt fart rainbows until owner
            yells pee in litter box hiss at cats. Run around the house at 4 in
            the morning. Bite off human's toes get suspicious of own shadow then
            go play with toilette paper.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App;
