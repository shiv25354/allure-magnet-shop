
import { RotateCcw, DollarSign, Lock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BuyWithConfidence = () => {
  const guarantees = [
    {
      icon: RotateCcw,
      title: '7-Day Return Guarantee',
      description: "Not satisfied? No problem. Return within 7 days — hassle-free.",
      iconColor: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: DollarSign,
      title: '100% Satisfaction or Money Back',
      description: "If you're not happy, we'll refund you. No questions asked.",
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Lock,
      title: 'Safe & Secure Checkout',
      description: 'Your data is protected with SSL encryption and verified payment systems.',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  const trustBadges = [
    { name: 'SSL Secure', icon: '🔒' },
    { name: 'Verified by Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'RuPay', icon: '💳' },
    { name: 'COD Available', icon: '💰' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Buy With Confidence</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your satisfaction and security come first.
          </p>
        </div>

        {/* Three-Column Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
              <CardContent className="space-y-4">
                <div className={`w-16 h-16 ${guarantee.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                  <guarantee.icon className={`h-8 w-8 ${guarantee.iconColor}`} />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{guarantee.title}</h3>
                <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-lg font-semibold text-center mb-6">Trusted & Secure Payment Methods</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm font-medium text-gray-700">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Footer Tagline */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-2 text-gray-700">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <p className="text-lg">
              Still unsure? Reach out to our team on WhatsApp for quick answers before you buy.
            </p>
          </div>
        </div>

        {/* Mobile Compact Summary */}
        <div className="md:hidden mt-8 bg-white rounded-xl p-6 shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔁</span>
              <span className="font-medium">7-Day Easy Returns</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💯</span>
              <span className="font-medium">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔒</span>
              <span className="font-medium">SSL Secure & Verified Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyWithConfidence;
