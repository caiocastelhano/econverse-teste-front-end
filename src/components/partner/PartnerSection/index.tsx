import styles from './styles.module.scss';
import PartnerCard from '../PartnerCard';
import type { Partner } from '@/types/partner';

const partner: Partner = {
  id: 'card',
  name: 'Parceiro',
  logoUrl: '/images/partner.png',
  alt: 'Logo do parceiro',
  href: '#',
};

export default function PartnerSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <PartnerCard partner={partner} />
          <PartnerCard partner={partner} />
        </div>
      </div>
    </section>
  );
}
