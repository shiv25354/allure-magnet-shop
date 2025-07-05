import { Button } from '@/components/ui/button';

interface EmotionalMarketingProps {
  onAddToCart: () => void;
}

const EmotionalMarketing = ({ onAddToCart }: EmotionalMarketingProps) => {
  return (
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
          onClick={onAddToCart} 
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all transform hover:scale-[1.02]"
        >
          💜 Add to Cart Now
        </Button>
      </div>
    </section>
  );
};

export default EmotionalMarketing;