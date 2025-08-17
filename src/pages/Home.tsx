import Header from "@/components/layout/Header"
import Footer from '@/components/layout/Footer'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import HeroBanner from '@/components/hero/HeroBanner'
import CategoryNav from '@/components/nav/CategoryNav'
import ProductSection from '@/components/product/ProductSection'
import PartnerSection from '@/components/partner/PartnerSection'
import BrandRow from '@/components/nav/BrandRow'
import Newsletter from '@/components/newsletter/Newsletter'
import InstitutionalSection from '@/components/info/InstitutionalSection'
import Modal from '@/components/ui/Modal'
import { homeCopy } from '@/components/content/home';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner
          title={homeCopy.hero.title}
          subtitle={homeCopy.hero.subtitle}
          imageUrl={homeCopy.hero.imageUrl}
          ctaLabel={homeCopy.hero.ctaLabel}
          onCtaClick={() => {}}
        />

        <Container>
          <Section id="categorias" size="sm">
            <CategoryNav items={[]} />
          </Section>

          <Section id="prod-rel-1" title={homeCopy.sections.relatedTitle}>
            <nav className="tabs" aria-label="Categorias de produtos">
              {homeCopy.tabs.map(t => (
                <a
                  key={t.id}
                  className={`tab ${t.align === 'right' ? 'tab--right' : ''}`}
                  href={`#${t.target}`}
                >
                  {t.label}
                </a>
              ))}
            </nav>
            <ProductSection id="celular" products={[]} columns={4} />
          </Section>

          <Section id="parceiros-1">
            <PartnerSection title={homeCopy.sections.partnersTitle} partners={[]} />
          </Section>

          <Section id="prod-rel-2" title={homeCopy.sections.relatedTitle}>
            <a className="see-all" href="#ver-todos">Ver todos</a>
            <ProductSection id="rel-2" products={[]} columns={4} />
          </Section>

          <Section id="parceiros-2">
            <PartnerSection title={homeCopy.sections.partnersTitle} partners={[]} />
          </Section>

          <Section id="marcas" title={homeCopy.sections.brandsTitle}>
            <BrandRow items={[]} />
          </Section>

          <Section id="prod-rel-3" title={homeCopy.sections.relatedTitle}>
            <a className="see-all" href="#ver-todos">Ver todos</a>
            <ProductSection id="rel-3" products={[]} columns={4} />
          </Section>

          <Section id="newsletter" size="lg">
            <Newsletter
              title={homeCopy.sections.newsletterTitle}
              subtitle={homeCopy.sections.newsletterSubtitle}
              onSubmit={() => {}}
            />
          </Section>

          <Section id="institucional">
            <InstitutionalSection items={homeCopy.sections.institutional} />
          </Section>
        </Container>
      </main>
      <Footer />
      <Modal isOpen={false} onClose={() => {}} ariaLabel="Newsletter" />
    </>
  );
}
