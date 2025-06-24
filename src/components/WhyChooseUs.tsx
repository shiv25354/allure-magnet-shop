
import { CheckCircle, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const WhyChooseUs = () => {
  const comparisons = [
    {
      feature: '🔬 10X Scent Longevity',
      ourBrand: 'Yes',
      otherBrands: 'Fades Quickly'
    },
    {
      feature: '🧪 Pheromone-Infused Formula',
      ourBrand: 'Scientifically blended',
      otherBrands: 'Absent'
    },
    {
      feature: '🛡️ Skin-Safe & Hypoallergenic',
      ourBrand: 'Dermatologist Approved',
      otherBrands: 'Unknown'
    },
    {
      feature: '🌿 Eco-Safe Ingredients',
      ourBrand: '100% Non-toxic',
      otherBrands: 'Chemical-Based'
    },
    {
      feature: '🇮🇳 Made in India',
      ourBrand: 'Local & Proud',
      otherBrands: 'Imported/Generic'
    },
    {
      feature: '✈️ Portable & Leakproof Design',
      ourBrand: 'Travel Friendly',
      otherBrands: 'Bulky Bottles'
    },
    {
      feature: '🧴 Gender-Inclusive Fragrances',
      ourBrand: 'For Everyone',
      otherBrands: 'Targeted Only'
    },
    {
      feature: '🧾 Transparent Ingredient List',
      ourBrand: '100% Disclosed',
      otherBrands: 'Hidden'
    },
    {
      feature: '🚚 Free Shipping + Easy Returns',
      ourBrand: 'Always',
      otherBrands: 'Conditions Apply'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us Over Others?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your confidence deserves more than just a fragrance. See what sets us apart.
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block max-w-5xl mx-auto">
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <TableHead className="text-white font-bold text-lg py-6">Feature / Benefit</TableHead>
                  <TableHead className="text-white font-bold text-lg py-6 text-center">
                    💜 AquaShield
                  </TableHead>
                  <TableHead className="text-white font-bold text-lg py-6 text-center">
                    ⚠️ Other Brands
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisons.map((item, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <TableCell className="font-semibold text-gray-800 py-4">
                      {item.feature}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-green-700 font-medium">{item.ourBrand}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center py-4">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-red-600 font-medium">{item.otherBrands}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {comparisons.map((item, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-800">{item.feature}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-purple-600 mb-2">💜 AquaShield</div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-700 text-sm font-medium">{item.ourBrand}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-600 mb-2">⚠️ Others</div>
                  <div className="flex items-center justify-center space-x-2">
                    <X className="h-4 w-4 text-red-500" />
                    <span className="text-red-600 text-sm font-medium">{item.otherBrands}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alternative Taglines */}
      <div className="text-center mt-12 space-y-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 italic">
            "Because your protection should work for you, not against you."
          </p>
          <p className="text-lg text-gray-700 italic">
            "Smart Choice. Better Materials. Proven Results."
          </p>
          <p className="text-lg text-gray-700 italic font-semibold">
            "Not just shoe covers. Confidence, science, and protection."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
