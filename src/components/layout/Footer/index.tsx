import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} VagaShop — Todos os direitos reservados.</p>
    </footer>
  );
}
