import Title from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Renderiza o título corretamente", () => {
  render(<Title>Teste de Título</Title>);
  const titleElement = screen.getByText(/Teste de Título/i);
  expect(titleElement).toBeInTheDocument();
});
