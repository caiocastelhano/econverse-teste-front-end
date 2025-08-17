import styles from './styles.module.scss';
import type { Partner } from '@/types/partner';

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a className={styles.card} href={partner.href ?? '#'} aria-label={partner.name} title={partner.name}>
      <img className={styles.logo} src={partner.logoUrl} alt={partner.alt ?? ''} />
    </a>
  );
}
