import { Receita } from '../../types/types';
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  receita: Receita
}

const Card = ({receita} : Props) => {
    const { id, image, title, description, author } = receita;

    return (
        <div className={styles.card}>
            <Link href={`/artigos/${id}`}>
                <img src={image} alt={title} className={styles.img}/>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.descricao}>{description}</p>
                    <div className={styles.detailsRow}>
                        <p><strong>Autor:</strong> {author}</p>
                    </div>
                </div>
            </Link>
        </div> 
    );
}

export default Card;