import styles from './styles.module.scss';
import type { Partner } from '@/types/partner';

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a className={styles.card} href={partner.href ?? '#'} aria-label={partner.name} title={partner.name}>
      <img className={styles.background} src={partner.logoUrl} alt={partner.alt ?? ''} />
      <div className={styles.overlay}>
        <h3 className={styles.title}>Parceiros</h3>
        <p className={styles.description}>Lorem ipsum dolor sit <br />amet, consectetur</p>
        <button className={styles.button}>CONFIRA</button>
      </div>
    </a>
  );
}
