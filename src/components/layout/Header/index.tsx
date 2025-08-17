import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a className={styles.logo} href="/">VagaShop</a>
        <nav aria-label="principal" className={styles.nav}>
          <a href="#destaques">Destaques</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
