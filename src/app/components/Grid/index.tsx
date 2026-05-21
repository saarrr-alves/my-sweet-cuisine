import style from "./Grid.module.css";
import { Receita } from "../../types/types";
import Card from "../Card";

type Props = {
  receitas: Receita[];
};

const Grid = ({ receitas }: Props) => {
  return (
    <section className={style.grid}>
      {receitas.map((receita) => (
        <Card key={receita.slug} receita={receita} />
      ))}
    </section>
  );
};

export default Grid;
