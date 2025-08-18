import styles from './styles.module.scss';

type BrandRowProps = {
  items: string[];
};

export default function BrandRow({ items }: BrandRowProps) {
  return (
    <div className={styles.brandRow}>
      <h2 className={styles.title}>Navegue por marcas</h2>
      <ul className={styles.list}>
        {items.map((src, index) => (
          <li key={index} className={styles.item}>
            <img src={src} alt="Marca" className={styles.logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
