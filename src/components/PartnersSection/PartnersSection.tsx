import styles from './PartnersSection.module.scss';

export default function PartnersSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {[1,2].map((n) => (
            <div key={n} className={styles.card}>
              <div className={styles.title}>Parceiros</div>
              <div className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur.</div>
              <button className={styles.cta} type="button">CONFIRA</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
