import styles from './styles.module.scss';
import ProductCard from '../ProductCard';
import type { Product } from '@/types/product';

type Props = {
  id?: string;
  title?: string;
  products: Product[];
  columns?: 2 | 3 | 4;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function ProductSection({ id, title, products, columns = 4, ctaLabel, onCtaClick }: Props) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-title` : undefined}>
      {title && <h2 id={`${id}-title`} className={styles.title}>{title}</h2>}
      <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      {ctaLabel && (
        <div className={styles.footer}>
          <button onClick={onCtaClick} className={styles.cta}>{ctaLabel}</button>
        </div>
      )}
    </section>
  );
}
