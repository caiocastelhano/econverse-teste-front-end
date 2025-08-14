import styles from './BrandRow.module.scss';

export default function BrandRow() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Navegue por marcas</h2>
        <div className={styles.row}>
          {[1,2,3,4,5].map((n) => <div key={n} className={styles.brand} />)}
        </div>
      </div>
    </section>
  );
}
