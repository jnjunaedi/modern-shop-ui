import BestDealsSection from "../features/home/components/BestDealsSection";
import Bottombar from "../features/home/components/Bottombar";
import CategorySection from "../features/home/components/CategorySection";
import FlashSaleSection from "../features/home/components/FlashSaleSection";
import Footer from "../features/home/components/Footer";
import HeroSection from "../features/home/components/HeroSection"
import ProductsSection from "../features/home/components/ProductsSection";
import BenefitSection from '../features/home/components/BenefitSection';
import MainLayout from '../layouts/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <BenefitSection />
      <CategorySection />
      <FlashSaleSection />
      <BestDealsSection />
      <ProductsSection />
      <Footer />
      <Bottombar />
    </MainLayout>
  );
}

export default HomePage;