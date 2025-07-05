import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  onAddToCart: () => void;
}

const FinalCTA = ({ onAddToCart }: FinalCTAProps) => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Keep Your Shoes Dry?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers protecting their footwear</p>
        <Button 
          onClick={onAddToCart} 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
        >
          🛒 Order Now - Free Shipping
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;