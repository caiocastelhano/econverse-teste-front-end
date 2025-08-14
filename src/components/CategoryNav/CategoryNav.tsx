import styles from './CategoryNav.module.scss';

const items = ['Tecnologia','Supermercado','Bebidas','Ferramentas','Saúde','Esportes e Fitness','Moda'];

export default function CategoryNav() {
  return (
    <section className="section">
      <div className="container">
        <ul className={styles.list} aria-label="Categorias rápidas">
          {items.map((it) => (
            <li key={it} className={styles.item}>
              <div className={styles.icon} aria-hidden />
              <span className={styles.label}>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
