import styles from './styles.module.scss';

export type Category = { id: string; label: string; value: string; iconUrl?: string };
type Props = {
  items: Category[];
  selected?: string;
  onSelect?: (value: string) => void;
  scrollable?: boolean;
};

export default function CategoryNav({ items, selected, onSelect, scrollable = true }: Props) {
  return (
    <nav aria-label="Categorias" className={`${styles.wrap} ${scrollable ? styles.scroll : ''}`}>
      <ul className={styles.list}>
        {items.map((c) => (
          <li key={c.id}>
            <button
              className={`${styles.btn} ${selected === c.value ? styles.active : ''}`}
              onClick={() => onSelect?.(c.value)}
              aria-pressed={selected === c.value}
            >
              {c.iconUrl && <img src={c.iconUrl} alt="" aria-hidden className={styles.icon} />}
              {c.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
