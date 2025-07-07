import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductGalleryProps {
  selectedVariant: string;
}

const ProductGallery = ({ selectedVariant }: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  console.log('ProductGallery rendered with selectedVariant:', selectedVariant);

  // Gallery images for different product views
  const galleryImages = [
    {
      id: 'main',
      src: '/lovable-uploads/defd5188-debc-4dea-9f80-2d7180befa0f.png',
      alt: 'Waterproof Rain Shoes Cover - Main View',
      variants: ['black', 'red']
    },
    {
      id: 'white',
      src: '/lovable-uploads/e8555be7-7dd0-424d-8e44-79ba1b95a500.png',
      alt: 'Waterproof Rain Shoes Cover - White Variant',
      variants: ['white', 'blue']
    },
    {
      id: 'lightweight',
      src: '/lovable-uploads/a2ff0484-c665-49a7-abcc-9a5d2fa8062c.png',
      alt: 'Lightweight and Foldable Design',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'resilience',
      src: '/lovable-uploads/add93a3e-afa2-4dfa-ae8b-38e9951b4050.png',
      alt: 'Good Resilience - Easy to Pull',
      variants: ['white', 'blue']
    },
    {
      id: 'portable',
      src: '/lovable-uploads/a783ecaf-a5ad-44c8-bc07-9a3b6b61114f.png',
      alt: 'Foldable and Easy to Carry',
      variants: ['white', 'blue']
    },
    {
      id: 'features-black',
      src: '/lovable-uploads/f1b85503-44b3-4dc7-953e-825f46122405.png',
      alt: 'Anti-Skid Pattern and Features - Black',
      variants: ['black', 'red']
    },
    {
      id: 'features-white',
      src: '/lovable-uploads/4463a68b-f49f-4d8b-9fbc-55c95e99ebe0.png',
      alt: 'Anti-Skid Pattern and Features - White',
      variants: ['white', 'blue']
    },
    {
      id: 'durability',
      src: '/lovable-uploads/26707f34-0b16-494d-bf3d-5f565f254ae4.png',
      alt: 'Durability Test and Quality',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'usage-demo',
      src: '/lovable-uploads/30e606c8-7cbd-4859-8255-9043b0e63d35.png',
      alt: 'Usage Demonstration',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'protection',
      src: '/lovable-uploads/6b87439b-0901-4363-b727-c8031dbc23f8.png',
      alt: 'Complete Waterproof Protection',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'flexibility',
      src: '/lovable-uploads/89da949d-b033-4d2c-96b2-18ce761ffac4.png',
      alt: 'Flexible Material Design',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'compact',
      src: '/lovable-uploads/9a6dc92e-72cf-4cb8-9c06-104ac7288a06.png',
      alt: 'Compact and Space-Saving',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'lifestyle',
      src: '/lovable-uploads/a652e314-49be-44ea-9d43-ea742662b74d.png',
      alt: 'Lifestyle and Daily Use',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'outdoor',
      src: '/lovable-uploads/b69192b6-08ce-490c-a416-66bbed5e57ff.png',
      alt: 'Perfect for Outdoor Activities',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'quality-check',
      src: '/lovable-uploads/c8c4a057-9ce1-47c2-9d41-e5ba85ec2dcb.png',
      alt: 'Quality Control and Testing',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'waterproof-test',
      src: '/lovable-uploads/d3085eb5-7206-4246-a33a-3446b6b11d93.png',
      alt: 'Waterproof Performance Test',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'packaging',
      src: '/lovable-uploads/ed90524e-24b9-47ca-96b8-9627887a2cd9.png',
      alt: 'Premium Packaging',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'size-guide',
      src: '/lovable-uploads/f5f3859d-1253-41a5-ba8b-562f07d8e511.png',
      alt: 'Size Guide and Fitting',
      variants: ['black', 'white', 'red', 'blue']
    }
  ];

  // Filter images based on selected variant or show all if variant supports it
  const filteredImages = galleryImages.filter(img => 
    img.variants.includes(selectedVariant)
  );

  const currentImages = filteredImages.length > 0 ? filteredImages : galleryImages;

  console.log('filteredImages:', filteredImages);
  console.log('currentImages:', currentImages);
  console.log('currentImages.length:', currentImages.length);

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Main Image Display */}
      <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-8 shadow-lg md:shadow-xl overflow-hidden touch-manipulation">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {currentImages.map((image, index) => (
              <CarouselItem key={image.id}>
                <div className="aspect-square relative touch-manipulation">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-lg md:rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-2 md:left-4 h-8 w-8 md:h-10 md:w-10" />
          <CarouselNext className="hidden md:flex right-2 md:right-4 h-8 w-8 md:h-10 md:w-10" />
        </Carousel>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex space-x-2 overflow-x-auto pb-2 px-1">
        {currentImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 transition-all ${
              selectedImageIndex === index
                ? 'border-blue-500 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        ))}
      </div>

      {/* Image Counter */}
      <div className="text-center text-sm text-gray-500">
        {selectedImageIndex + 1} of {currentImages.length}
      </div>
    </div>
  );
};

export default ProductGallery;