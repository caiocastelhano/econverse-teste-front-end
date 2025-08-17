import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren<{ className?: string }>;

export default function Container({ children, className }: Props) {
  return <div className={`${styles.container} ${className ?? ''}`.trim()}>{children}</div>;
}
