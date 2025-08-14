import styles from './RelatedProductsSection.module.scss';

const tabs = ['CELULAR','ACESSÓRIOS','TABLETS','NOTEBOOKS','TVS','VER TODOS'];

export default function RelatedProductsSection() {
  return (
    <section className={styles.section} aria-labelledby="related-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="related-title" className={styles.title}>Produtos relacionados</h2>
          <button className={styles.link} type="button">Ver todos</button>
        </header>

        <div className={styles.tabs} role="tablist" aria-label="Categorias">
          {tabs.map((t, i) => (
            <button key={t} role="tab" aria-selected={i === 0} className={i === 0 ? styles.tabActive : styles.tab}>
              {t}
            </button>
          ))}
        </div>

        <div className={styles.carousel}>
          <button className={styles.arrow} aria-label="Anterior">‹</button>

          <div className={styles.grid}>
            {[1,2,3,4].map((n) => (
              <article key={n} className={styles.card}>
                <div className={styles.thumb} />
                <h3 className={styles.cardTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className={styles.oldPrice}>R$ 30,90</p>
                <p className={styles.price}><strong>R$ 28,90</strong></p>
                <p className={styles.installments}>ou 2x de R$ 14,95 sem juros</p>
                <p className={styles.free}>Frete grátis</p>
                <button className={styles.buy} type="button">COMPRAR</button>
              </article>
            ))}
          </div>

          <button className={styles.arrow} aria-label="Próximo">›</button>
        </div>
      </div>
    </section>
  );
}
