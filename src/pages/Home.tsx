import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import HeroBanner from "@/components/hero/HeroBanner";
import CategoryNav from "@/components/nav/CategoryNav";
import ProductSection from "@/components/product/ProductSection";
import PartnerSection from "@/components/partner/PartnerSection";
import BrandRow from "@/components/nav/BrandRow";
import Newsletter from "@/components/newsletter/Newsletter";
import InstitutionalSection from "@/components/info/InstitutionalSection";
import Modal from "@/components/ui/Modal";
import { homeCopy } from "@/components/content/home";

import { InstagramIcon, FacebookIcon, LinkedInIcon } from "@/components/icons";

export default function Home() {
  const categories = [
    { id: "1", label: "Tecnologia", value: "tech", iconUrl: "/images/categories/tecnologia.png" },
    { id: "2", label: "Supermercado", value: "super", iconUrl: "/images/categories/supermercados.png" },
    { id: "3", label: "Bebidas", value: "drinks", iconUrl: "/images/categories/bebidas.png" },
    { id: "4", label: "Ferramentas", value: "tools", iconUrl: "/images/categories/ferramentas.png" },
    { id: "5", label: "Saúde", value: "health", iconUrl: "/images/categories/saude.png" },
    { id: "6", label: "Esportes e Fitness", value: "sports", iconUrl: "/images/categories/esportes.png" },
    { id: "7", label: "Moda", value: "fashion", iconUrl: "/images/categories/moda.png" },
  ];

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
            <CategoryNav items={categories} />
          </Section>

          <Section id="prod-rel-1" title={homeCopy.sections.relatedTitle}>
            <nav className="tabs" aria-label="Categorias de produtos">
              {homeCopy.tabs.map((t) => (
                <a
                  key={t.id}
                  className={`tab ${t.align === "right" ? "tab--right" : ""}`}
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
            <a className="see-all" href="#ver-todos">
              Ver todos
            </a>
            <ProductSection id="rel-2" products={[]} columns={4} />
          </Section>

          <Section id="parceiros-2">
            <PartnerSection title={homeCopy.sections.partnersTitle} partners={[]} />
          </Section>

          <Section id="marcas" title={homeCopy.sections.brandsTitle}>
            <BrandRow items={Array(5).fill("/images/brands/brand.png")} />
          </Section>

          <Section id="prod-rel-3" title={homeCopy.sections.relatedTitle}>
            <a className="see-all" href="#ver-todos">
              Ver todos
            </a>
            <ProductSection id="rel-3" products={[]} columns={4} />
          </Section>

          <Section id="newsletter" size="lg">
            <Newsletter
              title={homeCopy.sections.newsletterTitle}
              subtitle={homeCopy.sections.newsletterSubtitle}
              onSubmit={() => {}}
            />
          </Section>
        </Container>

       <InstitutionalSection
          logo={<img src="/images/logo2.png" alt="Econverse" height={28} />}
          description={homeCopy.sections.institutional.description}
          social={homeCopy.sections.institutional.social.map((item) => ({
            ...item,
            icon: <img src={item.iconPath} alt={item.label} width={20} height={20} />,
          }))}
          columns={homeCopy.sections.institutional.columns}
        />
      </main>

      <Footer />
      <Modal isOpen={false} onClose={() => {}} ariaLabel="Newsletter" />
    </>
  );
}
