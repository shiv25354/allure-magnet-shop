import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ProductAccordion = () => {
  return (
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
  );
};

export default ProductAccordion;