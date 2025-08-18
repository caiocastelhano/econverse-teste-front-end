import { useState, FormEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  onSubmit: (data: { name: string; email: string; accepted: boolean }) => void;
  successMessage?: string;
};

export default function Newsletter({
  title = 'Inscreva-se na nossa newsletter',
  subtitle = 'Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.',
  onSubmit,
  successMessage,
}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  const handle = (e: FormEvent) => {
    e.preventDefault();
    if (!accepted) return;
    onSubmit({ name, email, accepted });
    setSent(true);
  };

  if (sent && successMessage) return <div className={styles.success}>{successMessage}</div>;

  return (
    <section className={styles.wrapper}>
      <form className={styles.form} onSubmit={handle} aria-label="Inscrição na newsletter">
        <div className={styles.texts}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.controls}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Nome"
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="E-mail"
          />
          <button className={styles.cta} type="submit" disabled={!accepted}>
            INSCREVER
          </button>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              aria-label="Aceito os termos e condições"
            />
            <span>Aceito os termos e condições</span>
          </label>
        </div>
      </form>
    </section>
  );
}
