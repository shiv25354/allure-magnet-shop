import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { ShoppingCart, User, Star, Shield, RotateCcw, Truck, CheckCircle, Zap, Droplets, Leaf } from 'lucide-react';
import ScarcityNotifications from '@/components/ScarcityNotifications';
import Reviews from '@/components/Reviews';
import WhyChooseUs from '@/components/WhyChooseUs';

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState('yellow');
  const [selectedBundle, setSelectedBundle] = useState('1-pack');
  const [cartCount, setCartCount] = useState(0);

  const variants = [
    { id: 'yellow', name: 'Vibrant Yellow', color: '#FFFF00', image: '/lovable-uploads/9a6dc92e-72cf-4cb8-9c06-104ac7288a06.png' },
    { id: 'gray', name: 'Classic Gray', color: '#808080', image: '/lovable-uploads/c8c4a057-9ce1-47c2-9d41-e5ba85ec2dcb.png' },
    { id: 'blue', name: 'Ocean Blue', color: '#4169E1', image: '/lovable-uploads/c8c4a057-9ce1-47c2-9d41-e5ba85ec2dcb.png' },
  ];

  const bundles = [
    { id: '1-pack', name: '1-Pack', price: 599, originalPrice: 799, discount: 0 },
    { id: '2-pack', name: '2-Pack', price: 1099, originalPrice: 1598, discount: 10, popular: false },
    { id: '3-pack', name: '3-Pack', price: 1499, originalPrice: 2397, discount: 20, popular: true },
  ];

  const selectedVariantData = variants.find(v => v.id === selectedVariant);
  const selectedBundleData = bundles.find(b => b.id === selectedBundle);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    toast.success("Added to cart!", {
      description: `${selectedBundleData?.name} - ${selectedVariantData?.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Scarcity Notifications */}
      <ScarcityNotifications />

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        {/* Urgency Bar */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm">
          🎉 Add 3+ items, get 25% OFF + Free Shipping!
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
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs bg-red-500">
                  {cartCount}
                </Badge>
              )}
            </div>
            <User className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img 
                src={selectedVariantData?.image} 
                alt={selectedVariantData?.name}
                className="w-full h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex space-x-3 justify-center">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`w-16 h-16 rounded-xl border-2 transition-all ${
                    selectedVariant === variant.id 
                      ? 'border-blue-500 ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ backgroundColor: variant.color, opacity: 0.8 }}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Waterproof Rain Shoes Cover
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Reusable Silicone Protection for Every Step
              </p>
              
              <div className="flex items-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-600">(4.8/5 - 2,847 reviews)</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>100% Waterproof Silicone Protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Anti-Slip Textured Sole Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Stretchy Fit for All Shoe Sizes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Easy to Clean & Store</span>
                </div>
              </div>
            </div>

            {/* Variant Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Choose Color:</h3>
              <div className="flex space-x-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedVariant === variant.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Bundle Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Choose Bundle:</h3>
              <div className="space-y-3">
                {bundles.map((bundle) => (
                  <div
                    key={bundle.id}
                    className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedBundle === bundle.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedBundle(bundle.id)}
                  >
                    {bundle.popular && (
                      <Badge className="absolute -top-2 left-4 bg-orange-500">Most Popular</Badge>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{bundle.name}</div>
                        {bundle.discount > 0 && (
                          <div className="text-sm text-green-600">Save {bundle.discount}%</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">₹{bundle.price}</div>
                        {bundle.originalPrice > bundle.price && (
                          <div className="text-sm text-gray-500 line-through">₹{bundle.originalPrice}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
            >
              🛒 Add to Cart - ₹{selectedBundleData?.price}
            </Button>

            <div className="text-center text-green-600 font-medium">
              ✅ Free Shipping Across India
            </div>
          </div>
        </div>
      </section>

      {/* Trust Icons */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">100% Waterproof</h3>
              <p className="text-gray-600">Complete protection from rain and puddles</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <RotateCcw className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free return policy</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-gray-600">Free shipping on orders above ₹999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Accordion Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Product Details</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="features" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Features</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div>• Premium food-grade silicone material</div>
                <div>• Stretchable design fits shoe sizes 5-12</div>
                <div>• Anti-slip chevron pattern on sole</div>
                <div>• Lightweight and portable design</div>
                <div>• Temperature resistant (-40°C to 200°C)</div>
                <div>• Eco-friendly and reusable</div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="specifications" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Specifications</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div>• Material: 100% Premium Silicone</div>
                <div>• Weight: 180g per pair</div>
                <div>• Thickness: 2mm</div>
                <div>• Available Colors: Yellow, Gray, Blue, Pink, Black, White</div>
                <div>• Package Includes: 1 pair of shoe covers</div>
                <div>• Storage: Fold and store in included pouch</div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="usage" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">Usage Instructions</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div>1. Stretch the cover and slip over your shoes</div>
                <div>2. Ensure the heel is properly positioned</div>
                <div>3. Adjust for comfortable fit</div>
                <div>4. After use, rinse with water and air dry</div>
                <div>5. Store in the provided pouch for next use</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Emotional Marketing Block */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🌧️ Never Let Rain Stop Your Steps Again
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform any shoe into waterproof protection. Keep your feet dry, your shoes clean, 
            and your confidence high. Lightweight, durable, and designed for the active lifestyle. 
            Free shipping across India.
          </p>
          <Button 
            onClick={handleAddToCart}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
          >
            💜 Add to Cart Now
          </Button>
        </div>
      </section>

      {/* Visual Product Showcase */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available in 6 Vibrant Colors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Vibrant Yellow', color: '#FFFF00', tag: 'Best Seller' },
              { name: 'Classic Gray', color: '#808080', tag: '' },
              { name: 'Ocean Blue', color: '#4169E1', tag: 'Popular' },
              { name: 'Hot Pink', color: '#FF1493', tag: 'New' },
              { name: 'Midnight Black', color: '#000000', tag: '' },
              { name: 'Pure White', color: '#FFFFFF', tag: '' },
            ].map((color, index) => (
              <div key={index} className="text-center group">
                <div className="relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                  {color.tag && (
                    <Badge className="absolute -top-2 left-2 bg-red-500 text-white text-xs">
                      {color.tag}
                    </Badge>
                  )}
                  <div 
                    className="w-20 h-20 mx-auto rounded-full border-4 border-gray-200 mb-3"
                    style={{ backgroundColor: color.color }}
                  />
                  <h3 className="font-medium text-sm">{color.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            ✨ Redefine Protection. Redefine Comfort.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg">Premium Protection</h3>
              <p className="text-gray-600">Military-grade silicone shields your shoes from water, mud, and debris</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg">Instant Fit</h3>
              <p className="text-gray-600">Stretches to fit any shoe size perfectly - no more sizing worries</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg">Eco-Friendly</h3>
              <p className="text-gray-600">Reusable design reduces waste while saving money on shoe cleaning</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg">Portable Design</h3>
              <p className="text-gray-600">Lightweight and foldable - perfect for travel and daily commutes</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Keep Your Shoes Dry?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers protecting their footwear</p>
          <Button 
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
          >
            🛒 Order Now - Free Shipping
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
