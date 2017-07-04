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
  uniflow: require("../assets/uniflow.png"),
  markdown: require("../assets/markdown.png"),
  newbbc: require("../assets/newbbc.png"),
  oldfrontend: require("../assets/oldfrontend.jpg"),
  routechunk: require("../assets/routechunking.png"),
  clapping: require("../assets/clapping.gif"),
  graphql: require("../assets/graphql.png"),
  howmanya: require("../assets/howmany.png"),
  howmanyb: require("../assets/howmany2.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "white",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  slideA1 = () => {
    return (
      <Slide transition={["zoom"]} bgColor="primary">
        <Image
          src={images.reactlogo.replace("/", "")}
          margin="0px auto 40px"
          height="200px"
        />
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          React Presentation
        </Heading>
        <br />
        <Text>Kash Karimi</Text>
        <Text textColor="Secondary">Senior Platform Engineer</Text>
      </Slide>
    );
  };
  slideA2 = () => {
    return (
      <Slide transition={["slide"]} bgColor="black">
        <Image
          src={images.kat.replace("/", "")}
          margin="0px auto 40px"
          height="293px"
        />
        <Heading size={2} caps fit textColor="primary" textFont="primary">
          Wait what?
        </Heading>
      </Slide>
    );
  };
  slideA3 = () => {
    return (
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={6} textColor="Primary" caps>
          My interest & experience
        </Heading>

        <List>
          <ListItem>Started using React in 2014</ListItem>
          <ListItem>Few apps in production</ListItem>
          <ListItem>Teach React at Code Your Future</ListItem>
          <ListItem>Share passion</ListItem>
        </List>
      </Slide>
    );
  };

  slideA4 = () => {
    return (
      <Slide transition={["slide"]} bgColor="black">
        <BlockQuote>
          <Quote>Consider alternatives</Quote>
          <Cite>SE Tech Constitution</Cite>
        </BlockQuote>
      </Slide>
    );
  };
  slideA5 = () => {
    return (
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={6} textColor="Primary" caps>
          Talk Overview
        </Heading>
        <List>
          <ListItem>React Concepts & Patterns</ListItem>
          <ListItem>Why React is Awesome</ListItem>
          <ListItem>Why & How-to use it at Secret Escapes</ListItem>
          <ListItem>QAs</ListItem>
        </List>
      </Slide>
    );
  };

  slideA6 = () => {
    return (
      <Slide transition={["fade"]} bgColor="primary">
        <Heading size={4} textColor="secondary" caps>
          React: Concepts
        </Heading>
        <List>
          <Appear>
            <ListItem>View Library</ListItem>
          </Appear>
          <Appear>
            <ListItem>Declarative style</ListItem>
          </Appear>
          <Appear>
            <ListItem>Reusable Components</ListItem>
          </Appear>
          <Appear>
            <ListItem>Virtual DOM</ListItem>
          </Appear>
          <Appear>
            <ListItem>Unidirectional flow</ListItem>
          </Appear>
          <Appear>
            <ListItem>Mature - Facebook.com (v1 ahead), WhatsApp/Instagram web</ListItem>
          </Appear>
          <Appear>
            <ListItem>Easy to Test</ListItem>
          </Appear>
          <Appear>
            <ListItem>Pure Functions & Static types</ListItem>
          </Appear>
        </List>
      </Slide>
    );
  };

  slideA7 = () => {
    return (
      <Slide>
        <Heading size={4} textColor="secondary" caps>
          Library not Framework
        </Heading>
        <List>
          <Appear>
            <ListItem>Not opinionated</ListItem>
          </Appear>
          <Appear>
            <ListItem>Components are just JS, HTML and Styles</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Works nicely with many libraries (not disruptive)
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Batteries not included but thousands of components available
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              This presentation is build with React (Spectacle)
            </ListItem>
          </Appear>
        </List>
      </Slide>
    );
  };

  slideA8 = () => {
    return (
      <Slide>
        <Heading size={4} textColor="secondary" caps>
          Declarative style
        </Heading>
        <List>
          <Appear>
            <ListItem>Describes User Interfaces</ListItem>
          </Appear>
        </List>
        <Appear>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/deck.example")}
            margin="10px auto"
          />
        </Appear>
      </Slide>
    );
  };

  slideOldCode = () =>
    <Slide>
      <Heading size={8} textColor="secondary" caps>
        Remember this?
      </Heading>
      <Image
        src={images.oldfrontend.replace("/", "")}
        margin="0px auto 40px"
        height="600px"
      />
    </Slide>;

  slideA9 = () => {
    return (
      <Slide>
        <Heading size={4} textColor="secondary" caps>
          Reusable Components
        </Heading>
        <List>
          <Appear>
            <ListItem>Modular can contain HTML/JS/CSS</ListItem>
          </Appear>
          <Appear>
            <ListItem>Single Responsibility & DRY</ListItem>
          </Appear>
          <Appear>
            <ListItem>Reacts to State</ListItem>
          </Appear>
        </List>
      </Slide>
    );
  };

  slideA9B = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Exercise
      </Heading>
      <Text>How many components do you see?</Text>
      <Appear>
      <Image
        src={images.howmanya.replace("/", "")}
        margin="0px auto 40px"
        height="300px"
      />
      </Appear>
      <Appear>
      <Image
        src={images.howmanyb.replace("/", "")}
        margin="0px auto 40px"
        height="300px"
      />
      </Appear>
      <Appear>
        <Text>Answer: 5 (according to FB)</Text>
      </Appear>
    </Slide>;


  slideA10 = () => {
    return (
      <Slide>
        <Heading
          notes="most JavaScript frameworks update the DOM much more than they have to."
          size={4}
          textColor="secondary"
          caps
        >
          Virtual DOM
        </Heading>
        <List>
          <Appear>
            <ListItem>
              Smart Reconciliation (update when necessary)
            </ListItem>
          </Appear>
        </List>
        <List>
          <Appear>
            <ListItem>Schedules operations</ListItem>
          </Appear>
        </List>
        <List>
          <Appear>
            <ListItem>Fibre coming soon</ListItem>
          </Appear>
        </List>
      </Slide>
    );
  };

  slideA11 = () => {
    return (
      <Slide>
        <Heading size={4} textColor="secondary" caps>
          Unidirectional Flow
        </Heading>
        <br />
        <Image
          src={images.uniflow.replace("/", "")}
          margin="0px auto 40px"
          height="200px"
        />
        <List>
          <Appear>
            <ListItem>Encourages synchronous flow</ListItem>
          </Appear>
        </List>
      </Slide>
    );
  };

  slideA12 = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Competition
      </Heading>
      <List>
        <Appear>
          <ListItem>
            Angular 4: catch up game
          </ListItem>
        </Appear>
      </List>
      <List>
        <Appear>
          <ListItem>Syntax vs JSX</ListItem>
        </Appear>
      </List>
      <Appear>
        <CodePane
          lang="js"
          source={require("raw-loader!../assets/angular.example")}
          margin="10px auto"
        />
      </Appear>
      <Appear>
        <CodePane
          lang="jsx"
          source={require("raw-loader!../assets/react.user.example")}
          margin="10px auto"
        />
      </Appear>
    </Slide>;

  slideB1 = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        How React became the Queen of UI
      </Heading>
      <List>
        <ListItem>DOM and two-way binding</ListItem>
        <ListItem>Components are the future</ListItem>
        <ListItem>Developer experience</ListItem>
        <ListItem>Modern tools: hot reloading, code splitting (bundles), ServiceWorkers</ListItem>
        <ListItem>Progressive Web Apps (..or React Native apps)</ListItem>
        <ListItem>Flexible, rendered on server</ListItem>
      </List>
    </Slide>;


  slideB2 = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>Route-based Chunking</Heading>
      <Image
        src={images.routechunk.replace("/", "")}
        margin="0px auto 40px"
        height="230px"
      />
      <List>
        <ListItem>Faster initial load, and less heavy on browsers</ListItem>
        <ListItem>Lazy load future paths</ListItem>
        <ListItem>Webpack Tree-shaking ensures no unused code gets bundled</ListItem>
      </List>
    </Slide>;

  slideB2B = () =>
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Future
        </Heading>
        <Appear>
          <Image
          src={images.graphql.replace("/", "")}
          margin="0px auto 40px"
          height="200px"
        />
        </Appear>
        <Appear>
          <Text>React (Relay) Components & GraphQL</Text>
        </Appear>
      </Slide>;

slideB3 = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Future
      </Heading>
      <List>
        <ListItem>REST shortcomings (too many requests, e.g. n+1 queries)</ListItem>
      </List>
      <CodePane
        lang="js"
        source={require("raw-loader!../assets/REST.example")}
        margin="10px auto"
      />
      <CodePane
        lang="js"
        source={require("raw-loader!../assets/graphql.example")}
        margin="10px auto"
      />
    </Slide>
  slideB4 = () => {
    return (
      <Slide transition={["slide"]} bgColor="white">
      <Heading size={4} textColor="black" caps>
        Future is here: GraphQL
      </Heading>
      <List>
        <ListItem>GraphQL offers significantly more flexibility</ListItem>
        <ListItem>Define precisely the data you want—and only the data you want</ListItem>
        <ListItem>Replace multiple REST requests with a single call</ListItem>
        <ListItem>Github API (v4) is no longer REST but GraphQL</ListItem>
        <ListItem>Relay: React Components request what they need</ListItem>
      </List>
      </Slide>
    );
  };

  slideC1 = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Why should we use React at SE?
      </Heading>
      <List>
        <ListItem>Already have REST API - decoupling easier</ListItem>
        <ListItem>More state on client side (cache)</ListItem>
        <ListItem>Less calls to backend</ListItem>
        <ListItem>User perceives better performance</ListItem>
        <ListItem>Progressive Web-App ready</ListItem>
        <ListItem>Developer experience</ListItem>
        <ListItem>Future proofing </ListItem>
      </List>
    </Slide>;

  slideC2 = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        How can we use React at SE?
      </Heading>
      <List>
        <ListItem>Select a test page</ListItem>
        <ListItem>Mount on to the page</ListItem>
        <ListItem>Convert existing pages to components</ListItem>
        <ListItem>New features/pages as components</ListItem>
      </List>
    </Slide>;

  slideQA = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Questions?
      </Heading>
    </Slide>;

  slideEnd = () =>
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Thank You
      </Heading>
      <Image
        src={images.clapping.replace("/", "")}
        margin="0px auto 40px"
        height="300px"
      />
    </Slide>;

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {this.slideA1()}
        {this.slideA2()}
        {this.slideA3()}
        {this.slideA4()}
        {this.slideA5()}
        {this.slideA6()}
        {this.slideA7()}
        {this.slideA8()}
        {this.slideOldCode()}
        {this.slideA9()}
        {this.slideA9B()}
        {this.slideA10()}
        {this.slideA11()}
        {this.slideA12()}
        {this.slideB1()}
        {this.slideB2()}
        {this.slideB2B()}
        {this.slideB3()}
        {this.slideB4()}
        {this.slideC1()}
        {this.slideC2()}
        {this.slideQA()}
        {this.slideEnd()}
      </Deck>
    );
  }
}
