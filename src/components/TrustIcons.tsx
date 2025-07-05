import { Droplets, RotateCcw, Truck } from 'lucide-react';

const TrustIcons = () => {
  return (
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
  );
};

export default TrustIcons;