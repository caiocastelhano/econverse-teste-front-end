import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>
            Venha conhecer nossas <br />
            promoções
          </h1>
          <p>
            <strong>50% Off</strong> nos produtos
          </p>
          <button>Ver produto</button>
        </div>
      </div>
    </section>
  );
}
