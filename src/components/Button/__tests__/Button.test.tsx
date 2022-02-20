import { Button } from "../index";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockProps = {
  handleClick: jest.fn(),
  isDisabled: true,
  btnText: "The Btn Test",
};

test("button renders on screen", () => {
  render(<Button {...mockProps} />);

  expect(screen.getByRole("button")).toHaveTextContent("The Btn Test");
});

test("button is correctly disabled", () => {
  render(<Button {...mockProps} />);

  fireEvent.click(screen.getByRole("button"));

  expect(mockProps.handleClick).not.toHaveBeenCalled();
  expect(screen.getByRole("button")).toBeDisabled();
});
