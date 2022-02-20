import { Input } from "../index";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockProps = {
  fieldName: "Testing field",
  fieldValue: "Test value",
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  fieldErrors: { hasError: true, errorMsgs: ["test error message"] },
  isDisabled: false,
};

test("input renders on screen", () => {
  render(<Input {...mockProps} />);

  expect(screen.getByLabelText("Testing field")).toBeInTheDocument();

  expect(screen.getByDisplayValue("Test value")).toBeInTheDocument();
});

test("users can trigger the handlers", () => {
  render(<Input {...mockProps} />);

  fireEvent.change(screen.getByLabelText("Testing field"), {
    target: { value: "Changed test value" },
  });

  fireEvent.blur(screen.getByLabelText("Testing field"));

  expect(mockProps.handleBlur).toHaveBeenCalled();

  expect(mockProps.handleChange).toHaveBeenCalled();
});
