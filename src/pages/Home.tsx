import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CategoryNav from '../components/CategoryNav';
import RelatedProductsSection from '../components/RelatedProductsSection';
import PartnersSection from '../components/PartnersSection';
import BrandRow from '../components/BrandRow';
import Newsletter from '../components/Newsletter';
import InstitutionalSection from '../components/InstitutionalSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <CategoryNav />
      <RelatedProductsSection />
      <PartnersSection />
      <RelatedProductsSection />
      <PartnersSection />
      <BrandRow />
      <RelatedProductsSection />
      <Newsletter />
      <InstitutionalSection />
      <Footer />
    </>
  );
}
