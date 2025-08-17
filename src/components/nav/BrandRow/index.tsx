import styles from './styles.module.scss';

export type Brand = { id: string; name: string; logoUrl: string; value: string };
type Props = {
  items: Brand[];
  selected?: string;
  onSelect?: (value: string) => void;
};

export default function BrandRow({ items, selected, onSelect }: Props) {
  return (
    <nav aria-label="Marcas" className={styles.row}>
      {items.map(b => (
        <button
          key={b.id}
          className={`${styles.brand} ${selected === b.value ? styles.active : ''}`}
          onClick={() => onSelect?.(b.value)}
          aria-pressed={selected === b.value}
          aria-label={b.name}
          title={b.name}
        >
          <img src={b.logoUrl} alt="" />
        </button>
      ))}
    </nav>
  );
}
