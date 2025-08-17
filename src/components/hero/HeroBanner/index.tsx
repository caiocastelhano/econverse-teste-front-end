import styles from './styles.module.scss';

type Props = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function HeroBanner({ title, subtitle, imageUrl, ctaLabel, onCtaClick }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img src={imageUrl} alt="" className={styles.img} />
      <div className={styles.overlay}>
        <h1 id="hero-title" className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaLabel && <button onClick={onCtaClick} className={styles.cta}>{ctaLabel}</button>}
      </div>
    </section>
  );
}
