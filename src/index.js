import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Joke from "./Joke";

import { Transition } from "react-transition-group";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <Joke text={"Informaci\u00f3n"} />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: "inline-block",
  backgroundColor: "#8787d8"
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        To get to the other side!
      </div>
    )}
  </Transition>
);

class Example extends React.Component {
  state = { show: false };

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Joke text="Why did the chicken cross the road?"/>
        <br/>
        <button onClick={() => this.handleToggle()}>Reveal answer</button>
        <div>
          <Fade in={!!show} />
        </div>
      </div>
    );
  }
}

render(<Example />, document.getElementById("root"));
