import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Leaf, Truck } from 'lucide-react';

const BenefitsSection = () => {
  return (
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
  );
};

export default BenefitsSection;