import React from "react";
import { render } from "react-testing-library";
import Joke from "../joke";
import "dom-testing-library/extend-expect";

test("Joke comp receives props and then renders text", () => {
  // Renders Joke comp with some text prop.
  const { getByTestId } = render(
    <Joke text="The funniest joke of this year." />
  );

  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke of this year."
  );
});
