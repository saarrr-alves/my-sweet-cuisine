import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.img} src="../favicon.ico" />
      <h1 className={style.title}>Bem-Vindos ao <span>Sweet Cuisine</span></h1>
    </header>
  );
}

export default Header;