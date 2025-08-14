import styles from './Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input className={styles.input} placeholder="Digite seu nome" aria-label="Seu nome" />
          <input className={styles.input} placeholder="Digite seu e-mail" aria-label="Seu e-mail" />
          <button className={styles.button} type="submit">INSCREVER</button>
        </form>
      </div>
    </section>
  );
}
