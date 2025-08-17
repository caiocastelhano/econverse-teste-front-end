import styles from './styles.module.scss';

type InfoItem = { id: string; title: string; description?: string; icon?: React.ReactNode };
export default function InstitutionalSection({ items }: { items: InfoItem[] }) {
  return (
    <section aria-label="Informações institucionais">
      <ul className={styles.list}>
        {items.map(i => (
          <li key={i.id} className={styles.item}>
            {i.icon && <span aria-hidden className={styles.icon}>{i.icon}</span>}
            <div>
              <strong>{i.title}</strong>
              {i.description && <p>{i.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
