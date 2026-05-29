import Header from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Renderiza cabeçalho corretamente", () => {
  render(<Header />);

  const headerElement = screen.getByRole("banner");
  const title = screen.getByText(/Bem-Vindos ao/i);
  const logo = screen.getByAltText(/Logo do My Sweet Cuisine/i);

  expect(headerElement).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
});
