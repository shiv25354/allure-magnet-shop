
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Star, CheckCircle, Shield, Droplets, Leaf, Truck, Package, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Cart from '@/components/Cart';
import Footer from "@/components/Footer";

const ProductLanding = () => {
  const [selectedVariant, setSelectedVariant] = useState('black');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addItem } = useCart();

  const variants = [
    { id: 'black', name: 'Black', color: '#000000' },
    { id: 'gray', name: 'Gray', color: '#808080' },
    { id: 'white', name: 'White', color: '#FFFFFF' },
  ];

  const sizes = [
    { id: 'small', name: 'Small', price: 499 },
    { id: 'medium', name: 'Medium', price: 599 },
    { id: 'large', name: 'Large', price: 699 },
  ];

  const selectedVariantData = variants.find(v => v.id === selectedVariant);
  const selectedSizeData = sizes.find(s => s.id === selectedSize);

  const handleAddToCart = () => {
    if (selectedVariantData && selectedSizeData) {
      addItem({
        name: 'Waterproof Silicone Shoe Covers',
        variant: selectedVariantData.name,
        bundle: selectedSizeData.name,
        price: selectedSizeData.price,
        originalPrice: selectedSizeData.price + 200,
        image: '/lovable-uploads/9a6dc92e-72cf-4cb8-9c06-104ac7288a06.png'
      });

      toast.success("Added to cart!", {
        description: `${selectedSizeData.name} - ${selectedVariantData.name}`,
      });

      setIsCartOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
          🎉 Limited Time Offer - Free Shipping on All Orders!
        </div>
        
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">AquaShield</div>
          
          <div className="flex items-center space-x-4">
            <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
            <User className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Waterproof Silicone Shoe Covers
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Keep Your Shoes Dry, Clean & Safe – Anytime, Anywhere
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-lg text-gray-600">(4.9/5 - 3,247 reviews)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img 
                src="/lovable-uploads/9a6dc92e-72cf-4cb8-9c06-104ac7288a06.png"
                alt="Waterproof Silicone Shoe Covers"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">✅ Why Choose Our Shoe Covers?</h2>
              <div className="space-y-4">
                {[
                  { icon: Droplets, text: "100% Waterproof – Protects against rain, mud, snow & dirt" },
                  { icon: Shield, text: "Anti-Slip Sole Design – Walk safely even on wet surfaces" },
                  { icon: Leaf, text: "Reusable & Durable – Made with high-elastic, eco-friendly silicone" },
                  { icon: Package, text: "Foldable & Portable – Easy to carry in your bag or pocket" },
                  { icon: CheckCircle, text: "Universal Fit – Suitable for most shoe types and sizes" },
                  { icon: CheckCircle, text: "Integrated Molding – Seamless design, no leakage risk" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <feature.icon className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Choose Color:</h3>
              <div className="flex space-x-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: variant.color }}
                    />
                    <span>{variant.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Choose Size:</h3>
              <div className="space-y-3">
                {sizes.map((size) => (
                  <div
                    key={size.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedSize === size.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{size.name}</div>
                      <div className="text-xl font-bold text-blue-600">₹{size.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
            >
              🛒 Add to Cart - ₹{selectedSizeData?.price}
            </Button>

            <div className="text-center text-green-600 font-medium">
              ✅ Free Shipping Across India
            </div>
          </div>
        </div>
      </section>

      {/* How to Wear Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">👟 How to Wear (Step-by-Step)</h2>
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/8c3fa022-be2a-4d9d-88b4-d8d121d35cf6.png"
              alt="How to wear shoe covers step by step"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-blue-600">
                  1
                </div>
                <h3 className="font-semibold text-lg">Set the Toe Cap</h3>
                <p className="text-gray-600">Slip the front part of your shoe into the toe section.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-blue-600">
                  2
                </div>
                <h3 className="font-semibold text-lg">Cover the Heel</h3>
                <p className="text-gray-600">Stretch and pull the back part over your heel.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-blue-600">
                  3
                </div>
                <h3 className="font-semibold text-lg">Adjust to Fit</h3>
                <p className="text-gray-600">Pull the cover fully to ensure a snug, secure fit.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Features Gallery */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">📦 Product Features</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/726ec59c-f305-4bbb-b416-42eb31beaf41.png"
                alt="Lightweight and Foldable"
                className="w-full rounded-2xl shadow-lg"
              />
              <img 
                src="/lovable-uploads/d130e2e5-3502-4437-83b2-7618319292e2.png"
                alt="Foldable Easy to Carry"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/9d6c99d1-0003-40b2-94db-22dd93da1fdb.png"
                alt="Product Features - Black"
                className="w-full rounded-2xl shadow-lg"
              />
              <img 
                src="/lovable-uploads/5f8b8973-c9df-4546-8a32-267687eeecb9.png"
                alt="Product Features - White"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="/lovable-uploads/6f0fae0b-09ad-4e8b-9077-18e9e0bd2200.png"
              alt="White shoe covers in use"
              className="w-full rounded-2xl shadow-lg"
            />
            <img 
              src="/lovable-uploads/31428d5e-20c0-4b2f-bca9-4e6b62ff2243.png"
              alt="Integrated molding without gaps"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Durability Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/7e7ec6be-37a1-4b75-ab18-b6a0bd580ebd.png"
              alt="Good resilience, can be pulled at will"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Product Specifications</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold">Material & Design</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• High-quality, eco-friendly silicone</li>
                    <li>• Anti-skid herringbone pattern</li>
                    <li>• Stretchable to fit snugly over shoes</li>
                    <li>• Integrated molding technology</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold">Sizes & Colors</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Available in Black, Gray, White</li>
                    <li>• Sizes: Small, Medium, Large (unisex)</li>
                    <li>• Compact, foldable design</li>
                    <li>• Weighs less than a phone</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">🔒 Why You'll Love It</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <Droplets className="h-12 w-12 mx-auto" />
              <h3 className="font-semibold">No More Wet Socks</h3>
              <p className="text-blue-100">Complete protection from water and moisture</p>
            </div>
            
            <div className="space-y-4">
              <Truck className="h-12 w-12 mx-auto" />
              <h3 className="font-semibold">Perfect for Travel</h3>
              <p className="text-blue-100">Ideal for commuting, cycling, hiking, and more</p>
            </div>
            
            <div className="space-y-4">
              <User className="h-12 w-12 mx-auto" />
              <h3 className="font-semibold">For Everyone</h3>
              <p className="text-blue-100">Great for students, professionals, and outdoor enthusiasts</p>
            </div>
            
            <div className="space-y-4">
              <Package className="h-12 w-12 mx-auto" />
              <h3 className="font-semibold">Ultra Portable</h3>
              <p className="text-blue-100">Fits in any jacket pocket, handbag, or backpack</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button 
              onClick={handleAddToCart}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
            >
              🛒 Order Now - Free Shipping
            </Button>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Promise */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-green-800 mb-6">🌱 Eco-Friendly Promise</h2>
            <p className="text-xl text-green-700 leading-relaxed">
              Made from environmentally friendly silicone – durable, reusable, and reduces waste 
              from disposable shoe covers. Join us in protecting both your shoes and our planet.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductLanding;
