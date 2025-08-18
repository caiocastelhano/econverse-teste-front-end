import styles from './styles.module.scss';
import type { Product } from '@/types/product';
import { formatBRL } from '@/utils/format';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const { title, imageUrl, oldPrice, price, installment, shippingBadge } = product;

  const installmentText =
    installment?.text ??
    (installment
      ? `ou ${installment.quantity}x de ${formatBRL(installment.value)}${
          installment.rate && installment.rate > 0 ? '' : ' sem juros'
        }`
      : '');

  return (
    <article className={styles.card} aria-label={title}>
      <a className={styles.imageLink} href="#" aria-label={`Ver detalhes de ${title}`}>
        <img
          className={styles.image}
          src={imageUrl || "/images/placeholder.png"}
          alt={title}
          loading="lazy"
        />
      </a>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.prices}>
        {oldPrice && oldPrice > price ? (
          <span className={styles.oldPrice}>{formatBRL(oldPrice)}</span>
        ) : null}
        <strong className={styles.price}>{formatBRL(price)}</strong>
      </div>

      {installmentText && <div className={styles.installments}>{installmentText}</div>}
      {shippingBadge && <div className={styles.shipping}>{shippingBadge}</div>}

      <button className={styles.cta} type="button" aria-label={`Comprar ${title}`}>
        <span aria-hidden="true">COMPRAR</span>
      </button>
    </article>
  );
}
