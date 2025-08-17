import Header from '@/components/layout/Header'
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

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1) HERO */}
        <HeroBanner
          title="Venha conhecer nossas promoções"
          subtitle="50% Off nos produtos"
          imageUrl="/images/hero.jpg"
          ctaLabel="Ver produto"
          onCtaClick={() => {}}
        />

        <Container>

          {/* 2) FAIXA CATEGORIAS (ícones) */}
          <Section id="categorias" size="sm" title="" >
            <CategoryNav items={[]} />
          </Section>

          {/* 3) PRODUTOS RELACIONADOS (com tabs) */}
          <Section id="prod-rel-1" title="Produtos relacionados">
            {/* opcional: barra de tabs aqui */}
            <nav className="tabs" aria-label="Categorias de produtos">
              <a className="tab tab--active" href="#celular">Celular</a>
              <a className="tab" href="#acessorios">Acessórios</a>
              <a className="tab" href="#tablets">Tablets</a>
              <a className="tab" href="#notebooks">Notebooks</a>
              <a className="tab" href="#tvs">TVs</a>
              <a className="tab tab--right" href="#ver-todos">Ver todos</a>
            </nav>

            <ProductSection id="celular" products={[]} title="" columns={4} />
          </Section>

          {/* 4) PARCEIROS (banner dupla) */}
          <Section id="parceiros-1" size="md" title="">
            <PartnerSection title="Parceiros" partners={[]} />
          </Section>

          {/* 5) PRODUTOS RELACIONADOS (segunda repetição) */}
          <Section id="prod-rel-2" title="Produtos relacionados">
            <a className="see-all" href="#ver-todos">Ver todos</a>
            <ProductSection id="rel-2" products={[]} title="" columns={4} />
          </Section>

          {/* 6) PARCEIROS (segunda repetição) */}
          <Section id="parceiros-2" size="md" title="">
            <PartnerSection title="Parceiros" partners={[]} />
          </Section>

          {/* 7) NAVEGUE POR MARCAS (bolachas redondas) */}
          <Section id="marcas" title="Navegue por marcas">
            <BrandRow items={[]} />
          </Section>

          {/* 8) PRODUTOS RELACIONADOS (terceira repetição) */}
          <Section id="prod-rel-3" title="Produtos relacionados">
            <a className="see-all" href="#ver-todos">Ver todos</a>
            <ProductSection id="rel-3" products={[]} title="" columns={4} />
          </Section>

          {/* 9) NEWSLETTER (faixa roxa) */}
          <Section id="newsletter" size="lg" title="">
            <Newsletter
              title="Inscreva-se na nossa newsletter"
              subtitle="Assine e receba novidades e conteúdos exclusivos da Econverse."
              onSubmit={() => {}}
            />
          </Section>

          {/* 10) INSTITUCIONAL + FOOTER INFO */}
          <Section id="institucional" size="md" title="">
            <InstitutionalSection items={[
              { id: 'seg', title: 'Compra 100% segura' },
              { id: 'frete', title: 'Frete grátis acima de R$ 200' },
              { id: 'parcel', title: 'Parcele suas compras' },
            ]} />
          </Section>

        </Container>
      </main>

      <Footer />

      {/* Pop-up genérico (se usar) */}
      <Modal isOpen={false} onClose={() => {}} ariaLabel="Newsletter">
        {/* conteúdo do pop-up */}
      </Modal>
    </>
  )
}
