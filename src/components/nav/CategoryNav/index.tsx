import styles from './styles.module.scss';

export type Category = { id: string; label: string; value: string; iconUrl?: string };
type Props = {
  items: Category[];
  selected?: string;
  onSelect?: (value: string) => void;
  scrollable?: boolean;
};

const categories = [
  { id: '1', label: 'Tecnologia', value: 'tech', iconUrl: '/images/categories/tecnologia.png' },
  { id: '2', label: 'Supermercado', value: 'super', iconUrl: '/images/categories/supermercados.png' },
  { id: '3', label: 'Bebidas', value: 'drinks', iconUrl: '/images/categories/bebidas.png' },
  { id: '4', label: 'Ferramentas', value: 'tools', iconUrl: '/images/categories/ferramentas.png' },
  { id: '5', label: 'Saúde', value: 'health', iconUrl: '/images/categories/saude.png' },
  { id: '6', label: 'Esportes e Fitness', value: 'sports', iconUrl: '/images/categories/esportes.png' },
  { id: '7', label: 'Moda', value: 'fashion', iconUrl: '/images/categories/moda.png' },
];

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
