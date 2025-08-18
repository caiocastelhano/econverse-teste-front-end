import { useEffect, useState } from "react";

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

type Installment = {
  quantity: number;
  value: number;
  rate?: number;
  text?: string;
};

export type Product = {
  id: string | number;
  title: string;
  imageUrl: string;
  oldPrice?: number;
  price: number;
  installment?: Installment;
  shippingBadge?: string;
};

const DATA_URL = "/econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const toBRLNumber = (n: number) => (n >= 1000 ? n / 100 : n);

function normalize(raw: any): Product {
  return {
    id: raw.id ?? raw.productId ?? crypto.randomUUID(),
    title: raw.title ?? raw.productName ?? raw.nome ?? "Produto",
    imageUrl: raw.image ?? raw.photo ?? raw.imageUrl ?? "",
    oldPrice:
      raw.oldPrice !== undefined
        ? toBRLNumber(Number(raw.oldPrice))
        : raw.listPrice !== undefined
        ? toBRLNumber(Number(raw.listPrice))
        : undefined,
    price: toBRLNumber(Number(raw.price ?? raw.sellingPrice ?? 0)),
    installment: raw.installments
      ? Array.isArray(raw.installments)
        ? {
            quantity: Number(raw.installments[0]?.quantity ?? 0),
            value: toBRLNumber(Number(raw.installments[0]?.value ?? 0)),
            text: raw.installments[0]?.text,
          }
        : {
            quantity: Number(raw.installments.quantity ?? 0),
            value: toBRLNumber(Number(raw.installments.value ?? 0)),
            text: raw.installments.text,
          }
      : undefined,
    shippingBadge: raw.shippingBadge ?? (raw.freeShipping ? "Frete grátis" : "Frete grátis"),
  };
}

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

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const controller = new AbortController();
  (async () => {
    try {
      const res = await fetch(DATA_URL, { signal: controller.signal });
      const json = await res.json();

      // 🧪 LOG DE DEBUG:
      console.log("JSON recebido da API:", json);

      const items: Product[] = (Array.isArray(json) ? json : json.products || []).map(normalize);

      console.log("Produtos normalizados:", items);
      setAllProducts(items);
    } catch (e) {
      console.error("Erro ao carregar produtos:", e);
    } finally {
      setLoading(false);
    }
  })();
  return () => controller.abort();
}, []);

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
            <ProductSection
              id="rel-1"
              columns={4}
              products={allProducts.slice(0, 4)}
              initialTab="celular"
              isLoading={loading}
            />
          </Section>

          <Section id="parceiros-1">
            <PartnerSection title={homeCopy.sections.partnersTitle} partners={[]} />
          </Section>

          <Section id="prod-rel-2" title={homeCopy.sections.relatedTitle}>
            <ProductSection
              id="rel-2"
              columns={4}
              products={allProducts.slice(4, 8)}
              isLoading={loading}
            />
          </Section>

          <Section id="parceiros-2">
            <PartnerSection title={homeCopy.sections.partnersTitle} partners={[]} />
          </Section>

          <Section id="marcas" title={homeCopy.sections.brandsTitle}>
            <BrandRow items={Array(5).fill("/images/brands/brand.png")} />
          </Section>

          <Section id="prod-rel-3" title={homeCopy.sections.relatedTitle}>
            <ProductSection
              id="rel-3"
              columns={4}
              products={allProducts.slice(4, 8)}
              isLoading={loading}
            />
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
