import Header from "./components/Header";
import styles from "./page.module.css";
import { receitas } from "./data/artigos.json";
import Footer from "./components/Footer";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <Header />
          <div className={styles.intro}>
            <h2 className={styles.subtitle}>Descubra Receitas Incríveis</h2>
            <p className={styles.description}>
              Explore uma variedade de receitas deliciosas, dicas culinárias e
              truques para aprimorar suas habilidades na cozinha. Seja você um
              iniciante ou um chef experiente, temos algo para todos!
            </p>
          </div>
          <Grid receitas={receitas} />
        </main>
        <Footer />
      </div>
    </>
  );
}
