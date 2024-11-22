import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us Page test cases", () => {
  test("should load Contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Install npm i -D "@testing-library/jest-dom/extend-expect", if you get toBeInTheDocument() is not a function

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact us page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Install npm i -D "@testing-library/jest-dom/extend-expect", if you get toBeInTheDocument() is not a function

    expect(button).toBeInTheDocument();
  });

  test("should load Submit button inside Contact us page", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Install npm i -D "@testing-library/jest-dom/extend-expect", if you get toBeInTheDocument() is not a function

    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input text boxes in Contact us page", () => {
    render(<Contact />);
    //When u want to assert multiple items or when there are multiple items use "getAllByrole"
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
