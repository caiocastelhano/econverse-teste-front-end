import { PropsWithChildren, useId } from 'react';
import styles from './styles.module.scss';
import type { SectionSize } from '@/types/common';

type Props = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  size?: SectionSize;
}>;

export default function Section({ id, title, subtitle, size = 'md', children }: Props) {
  const safeId = useId();
  const titleId = `${id ?? safeId}-title`;

  return (
    <section aria-labelledby={title ? titleId : undefined} className={`${styles.section} ${styles[size]}`}>
      {title && (
        <header className={styles.header}>
          <h2 id={titleId} className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
