
import { Card, CardContent } from '@/components/ui/card';

const HowToWear = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">HOW TO WEAR</h2>
          <p className="text-xl text-gray-600">Simple 3-step process for perfect protection</p>
        </div>

        {/* Step-by-step Instructions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <img 
                src="/lovable-uploads/913f6780-62a4-43fc-a500-eeb43d1551c6.png" 
                alt="Step 1 - Set the toe caps"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Set the toe caps</h3>
              <p className="text-gray-600">Start by placing the toe section over the front of your shoe, ensuring a snug fit around the toe area.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <img 
                src="/lovable-uploads/913f6780-62a4-43fc-a500-eeb43d1551c6.png" 
                alt="Step 2 - Put on the heel"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Put on the heel</h3>
              <p className="text-gray-600">Stretch the heel section and slip it over the back of your shoe, ensuring proper positioning.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <img 
                src="/lovable-uploads/913f6780-62a4-43fc-a500-eeb43d1551c6.png" 
                alt="Step 3 - Pull to the end"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Pull to the end</h3>
              <p className="text-gray-600">Adjust and pull the cover to ensure complete coverage and a comfortable, secure fit.</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/lovable-uploads/ca16a464-76fa-40bd-b99b-353d34175c29.png" 
              alt="Anti-slip sole design"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Advanced Friction Design</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg">Friction groove design</h4>
                  <p className="text-gray-600">Prevent slipping with our specially designed chevron pattern sole</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg">Enhanced grip</h4>
                  <p className="text-gray-600">Superior traction on wet and slippery surfaces</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg">Durable construction</h4>
                  <p className="text-gray-600">Long-lasting performance in all weather conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Material Benefits */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-orange-600">COMPACT, PORTABLE, ANTI SLIP, WEAR-RESISTANT</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Environmentally Friendly Silicone</h4>
                <p className="text-gray-600">Made with high-quality, eco-friendly silicone material with excellent elasticity</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-lg mb-2">High Elasticity</h4>
                <p className="text-gray-600">Stretches to fit various shoe sizes while maintaining shape and durability</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-lg mb-2">Portable Design</h4>
                <p className="text-gray-600">Lightweight and foldable for easy storage and transport</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/lovable-uploads/90a8933e-ce6a-4410-8d20-a70fb18189ca.png" 
              alt="Material properties"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Foldable Feature */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Lightweight and Foldable</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-1 bg-orange-500"></div>
                  <span className="font-semibold">Foldable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-1 bg-orange-500"></div>
                  <span className="font-semibold">Saving space</span>
                </div>
                <p className="text-gray-600 mt-4">
                  The lightweight and foldable design makes it ideal for storing in your backpack or handbag.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/ad33bb88-1850-43f5-9583-44a69dd0ada2.png" 
                alt="Foldable design"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Easy to Carry */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">FOLDABLE, EASY TO CARRY</h3>
              <p className="text-lg mb-4">Silicone environmentally friendly material</p>
              <p className="text-sm opacity-90">
                Compact design allows you to carry these shoe covers anywhere. 
                Perfect for travel, work, or unexpected weather changes.
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/05c9920d-77ac-419e-a339-836c2188d918.png" 
                alt="Easy to carry"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/lovable-uploads/4db55573-2162-4446-8eac-ed93e45a4442.png" 
              alt="Product features"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Premium Features</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold">High elastic opening</h4>
                  <p className="text-gray-600">Easy to put on and off</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold">Rubber anti-skid pattern</h4>
                  <p className="text-gray-600">Superior grip and safety</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold">Rubber non-slip widened shoe edges</h4>
                  <p className="text-gray-600">Enhanced stability and protection</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <h4 className="font-semibold">Rubber portable pull ring</h4>
                  <p className="text-gray-600">Easy handling and adjustment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wearing Demonstration */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-3xl font-bold text-orange-500 text-center mb-8">WEARING DEMONSTRATION</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="/lovable-uploads/fc47ab5b-6d7c-4dad-b049-c43d11757ea7.png" 
                alt="Put on the toe first"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="font-semibold text-lg">▶ Put on the toe first</h4>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/fc47ab5b-6d7c-4dad-b049-c43d11757ea7.png" 
                alt="Bring up the heel again"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="font-semibold text-lg">Bring up the heel again ▶</h4>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/fc47ab5b-6d7c-4dad-b049-c43d11757ea7.png" 
                alt="Instant rain boots"
                className="w-full rounded-lg mb-4"
              />
              <h4 className="font-semibold text-lg">▶ Instant rain boots</h4>
            </div>
          </div>
        </div>

        {/* Waterproof Demo */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Integrated molding without gaps</h3>
            <img 
              src="/lovable-uploads/9d4fb991-7dbc-4955-820f-0e44172c6e62.png" 
              alt="Waterproof demonstration"
              className="w-full max-w-2xl mx-auto rounded-lg"
            />
          </div>
        </div>

        {/* Durability Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">GOOD RESILIENCE, CAN BE PULLED AT WILL</h3>
          <p className="text-lg text-gray-600 mb-6">
            Elastic and environmentally friendly silicone shoe covers can be easily pulled without deformation
          </p>
          <img 
            src="/lovable-uploads/7de4372e-c8ba-4c5e-a9cb-94e7bc0c035c.png" 
            alt="Durability test"
            className="w-full max-w-2xl mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToWear;
