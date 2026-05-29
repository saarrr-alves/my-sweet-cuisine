import Footer from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Renderiza rodapé corretamente", () => {
  render(<Footer />);
  const textElement = screen.getByText(
    /© 2026 Sweet Cuisine. All rights reserved./i,
  );
  expect(textElement).toBeInTheDocument();
});
