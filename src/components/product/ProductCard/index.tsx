import styles from './styles.module.scss';
import type { Product } from '@/types/product';

type Props = {
  product: Product;
  onAddToCart?: (id: string) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  const { id, imageUrl, alt, title, price } = product;

  return (
    <article className={styles.card}>
      <a href={product.href ?? '#'} className={styles.imageLink} aria-label={title}>
        <img src={imageUrl} alt={alt ?? ''} className={styles.img} />
      </a>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        {price.currency === 'BRL' ? 'R$ ' : '$ '}
        {price.promoAmount ?? price.amount}
      </p>
      <button className={styles.cta} onClick={() => onAddToCart?.(id)}>Adicionar</button>
    </article>
  );
}
