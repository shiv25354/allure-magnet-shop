import { useState } from 'react';
import { User } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';
import Cart from '@/components/Cart';
import ScarcityNotifications from '@/components/ScarcityNotifications';
import Reviews from '@/components/Reviews';
import WhyChooseUs from '@/components/WhyChooseUs';
import BuyWithConfidence from '@/components/BuyWithConfidence';
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';
import TrustIcons from '@/components/TrustIcons';
import ProductFeatures from '@/components/ProductFeatures';
import BenefitsSection from '@/components/BenefitsSection';
import VisualProductShowcase from '@/components/VisualProductShowcase';
import EmotionalMarketing from '@/components/EmotionalMarketing';
import FinalCTA from '@/components/FinalCTA';
import ProductAccordion from '@/components/ProductAccordion';
const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addItem } = useCart();

  const variants = [
    {
      id: 'black',
      name: 'Black',
      color: '#000000',
      image: '/lovable-uploads/defd5188-debc-4dea-9f80-2d7180befa0f.png'
    },
    {
      id: 'white',
      name: 'GhostWhite',
      color: '#F8F8FF',
      image: '/lovable-uploads/e8555be7-7dd0-424d-8e44-79ba1b95a500.png'
    },
    {
      id: 'red',
      name: 'Red',
      color: '#FF0000',
      image: '/lovable-uploads/defd5188-debc-4dea-9f80-2d7180befa0f.png'
    },
    {
      id: 'blue',
      name: 'Blue',
      color: '#0000FF',
      image: '/lovable-uploads/e8555be7-7dd0-424d-8e44-79ba1b95a500.png'
    }
  ];

  const bundles = [
    {
      id: '1-pack',
      name: '1-Pack',
      price: 399,
      originalPrice: 499,
      discount: 0
    },
    {
      id: '2-pack',
      name: '2-Pack',
      price: 699,
      originalPrice: 998,
      discount: 10,
      popular: false
    },
    {
      id: '3-pack',
      name: '3-Pack',
      price: 999,
      originalPrice: 1497,
      discount: 20,
      popular: true
    }
  ];

  const sizes = [
    {
      id: '7',
      name: 'Size 7'
    },
    {
      id: '8',
      name: 'Size 8'
    }
  ];

  const handleAddToCart = () => {
    const selectedVariantData = variants.find(v => v.id === 'black');
    const selectedBundleData = bundles.find(b => b.id === '1-pack');
    const selectedSizeData = sizes.find(s => s.id === '8');

    if (selectedVariantData && selectedBundleData && selectedSizeData) {
      addItem({
        name: 'Waterproof Rain Shoes Cover',
        variant: selectedVariantData.name,
        bundle: selectedBundleData.name,
        size: selectedSizeData.name,
        price: selectedBundleData.price,
        originalPrice: selectedBundleData.originalPrice,
        image: selectedVariantData.image
      });
      toast.success("Added to cart!", {
        description: `${selectedBundleData.name} - ${selectedVariantData.name} - ${selectedSizeData.name}`
      });
      setIsCartOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Scarcity Notifications */}
      <ScarcityNotifications />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        {/* Urgency Bar */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm">
          🚚 Free Shipping!
        </div>
        
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">AquaShield</div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Catalog</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="#" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
            <User className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection 
        variants={variants} 
        bundles={bundles} 
        sizes={sizes} 
        setIsCartOpen={setIsCartOpen} 
      />

      {/* Trust Icons */}
      <TrustIcons />

      {/* Product Features */}
      <ProductFeatures />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Buy With Confidence Section */}
      <BuyWithConfidence />

      {/* Product Accordion */}
      <ProductAccordion />

      {/* Reviews Section */}
      <Reviews />

      {/* Emotional Marketing Block */}
      <EmotionalMarketing onAddToCart={handleAddToCart} />

      {/* Visual Product Showcase */}
      <VisualProductShowcase />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Final CTA */}
      <FinalCTA onAddToCart={handleAddToCart} />

      <Footer />
    </div>
  );
};
export default Index;