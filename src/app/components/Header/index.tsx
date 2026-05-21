import style from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={style.header}>
      <Image
        className={style.img}
        alt="Logo do My Sweet Cuisine"
        src="/favicon.ico"
        width={120}
        height={120}
      />
      <h1 className={style.title}>
        Bem-Vindos ao <span>Sweet Cuisine</span>
      </h1>
    </header>
  );
};

export default Header;
