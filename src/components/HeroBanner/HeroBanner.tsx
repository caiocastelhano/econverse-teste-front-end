import styles from './HeroBanner.module.scss';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.banner} />
      </div>
    </section>
  );
}
