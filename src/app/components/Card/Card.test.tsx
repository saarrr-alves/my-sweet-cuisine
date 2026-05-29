import Card from "./index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Renderiza o card corretamente", () => {
  const receita = {
    slug: "receita-teste",
    image: "/test-image.jpg",
    title: "Receita de Teste",
    description: "Descrição da receita de teste",
    author: "Autor de Teste",
    date: "2024-01-01",
    ingredients: ["Ingrediente 1", "Ingrediente 2"],
    preperation: ["Modo de preparo da receita de teste"],
  };

  render(<Card receita={receita} />);
});
