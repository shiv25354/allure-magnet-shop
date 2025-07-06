import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/contexts/CartContext';

interface Variant {
  id: string;
  name: string;
  color: string;
  image: string;
}

interface Bundle {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  popular?: boolean;
}

interface Size {
  id: string;
  name: string;
}

interface HeroSectionProps {
  variants: Variant[];
  bundles: Bundle[];
  sizes: Size[];
  setIsCartOpen: (open: boolean) => void;
}

const HeroSection = ({ variants, bundles, sizes, setIsCartOpen }: HeroSectionProps) => {
  const [selectedVariant, setSelectedVariant] = useState('black');
  const [selectedBundle, setSelectedBundle] = useState('1-pack');
  const [selectedSize, setSelectedSize] = useState('8');
  const { addItem } = useCart();

  const selectedVariantData = variants.find(v => v.id === selectedVariant);
  const selectedBundleData = bundles.find(b => b.id === selectedBundle);
  const selectedSizeData = sizes.find(s => s.id === selectedSize);

  const handleAddToCart = () => {
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
    <section className="container mx-auto px-4 py-6 md:py-12">
      <div className="flex justify-center">
        {/* Product Info */}
        <div className="max-w-2xl space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Waterproof Rain Shoes Cover
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Reusable Silicone Protection for Every Step
            </p>
            
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => 
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
              )}
              <span className="text-sm md:text-base text-gray-600">(4.8/5 - 2,847 reviews)</span>
            </div>

            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base">100% Waterproof Silicone Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Anti-Slip Textured Sole Design</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Stretchy Fit for All Shoe Sizes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Easy to Clean & Store</span>
              </div>
            </div>
          </div>

          {/* Variant Selection */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3">Choose Color:</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {variants.map(variant => 
                <button 
                  key={variant.id} 
                  onClick={() => setSelectedVariant(variant.id)} 
                  className={`flex items-center justify-center p-2 rounded-lg border transition-all hover-scale ${
                    selectedVariant === variant.id 
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-300" 
                    style={{ backgroundColor: variant.color }}
                  />
                </button>
              )}
            </div>
          </div>

          {/* Bundle Selection */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3">Choose Bundle:</h3>
            <div className="space-y-3">
              {bundles.map(bundle => 
                <div 
                  key={bundle.id} 
                  className={`relative p-3 md:p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedBundle === bundle.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`} 
                  onClick={() => setSelectedBundle(bundle.id)}
                >
                  {bundle.popular && 
                    <Badge className="absolute -top-2 left-4 bg-orange-500 text-xs">Most Popular</Badge>
                  }
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm md:text-base">{bundle.name}</div>
                      {bundle.discount > 0 && 
                        <div className="text-xs md:text-sm text-green-600">Save {bundle.discount}%</div>
                      }
                    </div>
                    <div className="text-right">
                      <div className="text-lg md:text-xl font-bold text-blue-600">₹{bundle.price}</div>
                      {bundle.originalPrice > bundle.price && 
                        <div className="text-xs md:text-sm text-gray-500 line-through">₹{bundle.originalPrice}</div>
                      }
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3">Choose Size:</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {sizes.map(size => 
                <button 
                  key={size.id} 
                  onClick={() => setSelectedSize(size.id)} 
                  className={`px-3 py-2 md:px-4 md:py-2 rounded-lg border transition-all text-sm md:text-base ${
                    selectedSize === size.id 
                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {size.name}
                </button>
              )}
            </div>
          </div>

          <Button 
            onClick={handleAddToCart} 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
          >
            🛒 Add to Cart - ₹{selectedBundleData?.price}
          </Button>

          <div className="text-center text-green-600 font-medium text-sm md:text-base">
            ✅ Free Shipping Across India
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;