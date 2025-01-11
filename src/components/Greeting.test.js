import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Gretting component", () => {
  test("renders 'Hello World' as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'It is good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);
    const text = screen.getByText("It is good to see you!");
    expect(text).toBeInTheDocument();
  });

  test("renders 'Changed!' if the buttons was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const text = screen.getByText("Changed!");
    expect(text).toBeInTheDocument();
  });
});
