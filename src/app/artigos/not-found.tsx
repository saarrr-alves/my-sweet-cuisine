import style from "./NotFound.module.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={style.pageNotFound}>
      <Link href="/" className={style.btnBack}>
        ← <span>Voltar</span>
      </Link>

      <div className={style.container}>
        <h1>Artigo Não Encontrado</h1>
        <p>Desculpe, o artigo que você está procurando não existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
