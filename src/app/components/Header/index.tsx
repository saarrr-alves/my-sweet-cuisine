import style from "./Header.module.css";
import Image from "next/image";
import Title from "../Title/index";

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
      <Title>
        Bem-Vindos ao <span>Sweet Cuisine</span>
      </Title>
    </header>
  );
};

export default Header;
