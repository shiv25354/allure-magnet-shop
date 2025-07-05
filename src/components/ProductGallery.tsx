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
    }
  ];

  // Filter images based on selected variant or show all if variant supports it
  const filteredImages = galleryImages.filter(img => 
    img.variants.includes(selectedVariant)
  );

  const currentImages = filteredImages.length > 0 ? filteredImages : galleryImages;

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="bg-white rounded-2xl p-4 md:p-8 shadow-xl">
        <Carousel className="w-full">
          <CarouselContent>
            {currentImages.map((image, index) => (
              <CarouselItem key={image.id}>
                <div className="aspect-square relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain md:object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10" />
          <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10" />
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