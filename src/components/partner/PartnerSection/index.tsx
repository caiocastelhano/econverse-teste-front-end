import styles from './styles.module.scss';
import PartnerCard from '../PartnerCard';
import type { Partner } from '@/types/partner';

export default function PartnerSection({ title, partners }: { title?: string; partners: Partner[] }) {
  return (
    <section aria-labelledby={title ? 'partners-title' : undefined}>
      {title && <h2 id="partners-title" className={styles.title}>{title}</h2>}
      <div className={styles.grid}>
        {partners.map(p => <PartnerCard key={p.id} partner={p} />)}
      </div>
    </section>
  );
}
