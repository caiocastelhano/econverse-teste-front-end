import { useState, FormEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
  title?: string;
  subtitle?: string;
  onSubmit: (email: string) => void;
  successMessage?: string;
};

export default function Newsletter({ title = 'Fique por dentro', subtitle, onSubmit, successMessage }: Props) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handle = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setSent(true);
  };

  if (sent && successMessage) return <div className={styles.success}>{successMessage}</div>;

  return (
    <form className={styles.form} onSubmit={handle} aria-label="Inscrição na newsletter">
      <div className={styles.texts}>
        <strong>{title}</strong>
        {subtitle && <span>{subtitle}</span>}
      </div>
      <div className={styles.controls}>
        <input
          type="email"
          placeholder="seu@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="E-mail"
        />
        <button type="submit">Inscrever</button>
      </div>
    </form>
  );
}
