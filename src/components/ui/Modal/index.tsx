import { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  ariaLabel: string;   // use quando não houver título visível
  titleId?: string;    // use quando houver título visível
  closeOnBackdrop?: boolean;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, ariaLabel, titleId, closeOnBackdrop = true, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={closeOnBackdrop ? onClose : undefined}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={titleId ? undefined : ariaLabel}
        aria-labelledby={titleId}
        className={styles.modal}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} aria-label="Fechar" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
