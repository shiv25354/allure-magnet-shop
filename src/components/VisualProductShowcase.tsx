import { Badge } from '@/components/ui/badge';

const VisualProductShowcase = () => {
  const colors = [
    {
      name: 'Vibrant Yellow',
      color: '#FFFF00',
      tag: 'Best Seller'
    }, 
    {
      name: 'Classic Gray',
      color: '#808080',
      tag: ''
    }, 
    {
      name: 'Ocean Blue',
      color: '#4169E1',
      tag: 'Popular'
    }, 
    {
      name: 'Hot Pink',
      color: '#FF1493',
      tag: 'New'
    }, 
    {
      name: 'Midnight Black',
      color: '#000000',
      tag: ''
    }, 
    {
      name: 'Pure White',
      color: '#FFFFFF',
      tag: ''
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Available in 6 Vibrant Colors</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colors.map((color, index) => (
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
  );
};

export default VisualProductShowcase;