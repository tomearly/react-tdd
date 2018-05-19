import React from "react";
import { render } from "react-testing-library";
import Hello from "../Hello";
import "dom-testing-library/extend-expect";

test("Hello comp receives props and then renders text", () => {
  // Renders Joke comp with some text prop.
  const { getByTestId } = render(<Hello name="Tom" />);

  expect(getByTestId("greeting-text")).toHaveTextContent("Hello Tom");
});
