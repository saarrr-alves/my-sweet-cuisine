import { Receita } from "../../types/types";
import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";

type Props = {
  receita: Receita;
};

const Card = ({ receita }: Props) => {
  const { slug, image, title, description, author } = receita;

  return (
    <div className={styles.card}>
      <Link href={`/artigos/${slug}`}>
        <Image
          src={image}
          alt={title}
          className={styles.img}
          width={300}
          height={200}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.descricao}>{description}</p>
          <div className={styles.detailsRow}>
            <p>
              <strong>Autor:</strong> {author}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
