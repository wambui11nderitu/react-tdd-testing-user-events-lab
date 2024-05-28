
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import App from "../App";

// Portfolio Elements
// Test 1
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

// Test 2
test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "src/gladoo.jpeg");
});

// Test 3
test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

// Test 4
test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/i love basketball/i);

  expect(bio).toBeInTheDocument();
});

// Test 5
test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
// Test 7
test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/enter your name/i);
  const emailInput = screen.getByLabelText(/enter your email address/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

// Contacts
// Test 8
test("the page shows information the user types into the contact form field", () => {
  render(<App />);

  expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/your email address/i)).toBeInTheDocument();
});

// Test 9
test("the page shows information the user types into the contact form field", () => {
  render(<App />);

  const contactName = screen.getByPlaceholderText(/your name/i);
  const contactEmail = screen.getByPlaceholderText(/your email address/i);

  userEvent.type(contactName, "Wambui");
  userEvent.type(contactEmail, "wambui@gmail.com");

  expect(contactName).toHaveValue("Wambui");
  expect(contactEmail).toHaveValue("wambui@gmail.com");
});

// Checkboxes
// Test 10
test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  expect(screen.getByLabelText(/frontend development/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/backend development/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/mobile development/i)).toBeInTheDocument();
});

// Test 11
test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const frontendCheckbox = screen.getByLabelText(/frontend development/i);
  const backendCheckbox = screen.getByLabelText(/backend development/i);
  const mobileCheckbox = screen.getByLabelText(/mobile development/i);

  expect(frontendCheckbox).not.toBeChecked();
  expect(backendCheckbox).not.toBeChecked();
  expect(mobileCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
// Test 12
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/enter your name/i);
  const emailInput = screen.getByLabelText(/enter your email address/i);

  userEvent.type(nameInput, "Wambui Ndirangu");
  userEvent.type(emailInput, "wambui.ndirangu@gmail.com");

  expect(nameInput).toHaveValue("Wambui Ndirangu");
  expect(emailInput).toHaveValue("wambui.ndirangu@gmail.com");
});

// Test 13
test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);

  const checkbox1 = screen.getByLabelText(/frontend development/i);
  const checkbox2 = screen.getByLabelText(/backend development/i);
  const checkbox3 = screen.getByLabelText(/mobile development/i);

  userEvent.click(checkbox1);
  expect(checkbox1).toBeChecked();

  userEvent.click(checkbox2);
  expect(checkbox2).toBeChecked();

  userEvent.click(checkbox3);
  expect(checkbox3).toBeChecked();
});

// Test 14
test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/enter your name/i);
  const emailInput = screen.getByLabelText(/enter your email address/i);
  const checkbox1 = screen.getByLabelText(/frontend development/i);
  const checkbox2 = screen.getByLabelText(/backend development/i);
  const checkbox3 = screen.getByLabelText(/mobile development/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  userEvent.type(nameInput, "John Doe");
  userEvent.type(emailInput, "john.doe@example.com");
  userEvent.click(checkbox1);
  userEvent.click(checkbox2);
  userEvent.click(checkbox3);
  userEvent.click(submitButton);

  const successMessage = screen.getByText(/thank you for subscribing/i);

  expect(successMessage).toBeInTheDocument();
});
