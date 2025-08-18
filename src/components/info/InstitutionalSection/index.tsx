import styles from './styles.module.scss';

type Social = { id: string; icon: React.ReactNode; href: string; label: string };
type LinkItem = { id: string; label: string; href: string };
type Column = { id: string; heading: string; links: LinkItem[] };

type Props = {
  logo: React.ReactNode;
  description: string;
  social: Social[];
  columns: Column[];
};

export default function InstitutionalSection({ logo, description, social, columns }: Props) {
  return (
    <section className={styles.wrapper} aria-label="Informações institucionais">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>{logo}</div>
          <p className={styles.copy}>{description}</p>
          <ul className={styles.social} aria-label="Redes sociais">
            {social.map(s => (
              <li key={s.id}>
                <a href={s.href} aria-label={s.label} className={styles.socialLink}>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.columns}>
          {columns.map(col => (
            <nav key={col.id} className={styles.col} aria-label={col.heading}>
              <h4 className={styles.heading}>{col.heading}</h4>
              <ul className={styles.links}>
                {col.links.map(item => (
                  <li key={item.id}>
                    <a href={item.href} className={styles.link}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </section>
  );
}
