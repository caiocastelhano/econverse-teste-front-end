import styles from './InstitutionalSection.module.scss';

export default function InstitutionalSection() {
  return (
    <section className={styles.section} aria-labelledby="institutional-title">
      <div className="container">
        <h2 id="institutional-title" className="visually-hidden">
          Informações institucionais e links úteis
        </h2>

        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <img src="/images/logo.svg" alt="Econverse" className={styles.logo} />
              <span className={styles.brandText}>econverse</span>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <ul className={styles.social} aria-label="Redes sociais">
              <li><a href="#" aria-label="Instagram">IG</a></li>
              <li><a href="#" aria-label="Facebook">FB</a></li>
              <li><a href="#" aria-label="LinkedIn">IN</a></li>
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <nav className={styles.columns} aria-label="Links institucionais">
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Institucional</h3>
              <ul className={styles.links}>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe Conosco</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h3 className={styles.colTitle}>Ajuda</h3>
              <ul className={styles.links}>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h3 className={styles.colTitle}>Termos</h3>
              <ul className={styles.links}>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
