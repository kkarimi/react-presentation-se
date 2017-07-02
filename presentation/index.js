import React from "react";

import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  reactlogo: require("../assets/reactlogo.png"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "white",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  slideA1 = () => {
    return (
    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.reactlogo.replace("/", "")} margin="0px auto 40px" height="200px"/>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        React Workshop
      </Heading>
      <br />
      <Text>
        Kash Karimi
      </Text>
      <Text textColor="Secondary">
        Senior Platform Engineer
      </Text>
    </Slide>
    )
  }
  slideA2 = () => {
    return (
      <Slide transition={["slide"]} bgColor="black"
      notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>
    )
  }
  slideA3 = () => {
    return (
      <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="Primary" caps>Why I am giving this talk</Heading>
          <List>
            <ListItem>Existing interest at SE</ListItem>
            <ListItem>Share passion</ListItem>
            <ListItem>Few apps in production</ListItem>
            <ListItem>Teach React at Code Your Future</ListItem>
          </List>
      </Slide>
    )
  }
  slideA4 = () => {
    return (
        <Slide transition={["slide"]} bgColor="black">
        <BlockQuote>
            <Quote>Consider alternatives</Quote>
            <Cite>SE Tech Constitution</Cite>
          </BlockQuote>
      </Slide>
    )
  }
  slideA5 = () => {
    return (
      <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="Primary" caps>Talk Overview</Heading>
          <List>
            <ListItem>Why React is Kickass</ListItem>
            <ListItem>Live Demo</ListItem>
            <ListItem>Why & How-to use it at Secret Escapes</ListItem>
            <ListItem>QAs</ListItem>
          </List>
      </Slide>
    )
  }

  slideA6 = () => {
    return (
      <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps>What is it</Heading>
         <List>
            <Appear><ListItem>View Library</ListItem></Appear>
            <Appear><ListItem>Declarative style</ListItem></Appear>
            <Appear><ListItem>Reusable Components</ListItem></Appear>
            <Appear><ListItem>Uses Virtual DOM</ListItem></Appear>
            <Appear><ListItem>Encourages synchronous unidirectional flow</ListItem></Appear>
            <Appear><ListItem>Easy to write tests for</ListItem></Appear>
            <Appear><ListItem>Can be written with static types</ListItem></Appear>
          </List>
          </Slide>
    )
  }

  slideA7 = () => {
    return (
      <Slide>
        <Heading size={4} textColor="secondary" caps>Library not Framework</Heading>
        <List>
          <Appear><ListItem>It's not too opinionated</ListItem></Appear>
          <Appear><ListItem>Just JavaScript and HTML</ListItem></Appear>
          <Appear><ListItem>Works nicely with most other libraries (not jQuery)</ListItem></Appear>
        </List>
      </Slide>
    )
  }

  slideA8 = () => {
    return (
      <Slide>
        <Heading size={4} textColor="secondary" caps>Declarative style</Heading>
        <List>
          <Appear><ListItem>Describes User Interfaces</ListItem></Appear>
        </List>
        <Appear>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/deck.example")}
            margin="20px auto"
          />
        </Appear>
      </Slide>
    )
  }


  slideA9 = () => {
    return (
      <Slide>
      </Slide>
    )
  }

  slideB1 = () => (
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        How React became the Queen (or King) of UI
        </Heading>
      <List>
        <ListItem># </ListItem>
        <ListItem>DOM is too slow, two way binding is slower</ListItem>
        <ListItem>Virtual DOM is Fast</ListItem>
        <ListItem>Components are future of the web</ListItem>
        <ListItem>Modern Developer tools: hot reloading</ListItem>
        <ListItem>SEO friendly</ListItem>
        <ListItem>Mobile Apps</ListItem>
        <ListItem>code splitting, lazy loading, progressive web enhancement</ListItem>
        <ListItem>load css/js for component</ListItem>
      </List>
    </Slide>
  )

  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {this.slideA1()}
        {this.slideA2()}
        {this.slideA3()}
        {this.slideA4()}
        {this.slideA5()}
        {this.slideA6()}
        {this.slideA7()}
        {this.slideA8()}
        {this.slideA9()}
        {this.slideB1()}
      </Deck>
    );
  }
}
