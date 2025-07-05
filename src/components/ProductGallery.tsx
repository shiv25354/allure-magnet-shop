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
      id: 'features',
      src: '/lovable-uploads/d3085eb5-7206-4246-a33a-3446b6b11d93.png',
      alt: 'Waterproof Rain Shoes Cover - Features',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'lifestyle1',
      src: '/lovable-uploads/9a6dc92e-72cf-4cb8-9c06-104ac7288a06.png',
      alt: 'Waterproof Rain Shoes Cover - In Use',
      variants: ['black', 'white', 'red', 'blue']
    },
    {
      id: 'lifestyle2',
      src: '/lovable-uploads/c8c4a057-9ce1-47c2-9d41-e5ba85ec2dcb.png',
      alt: 'Waterproof Rain Shoes Cover - Lifestyle',
      variants: ['black', 'white', 'red', 'blue']
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
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <Carousel className="w-full">
          <CarouselContent>
            {currentImages.map((image, index) => (
              <CarouselItem key={image.id}>
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImageIndex(index)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {currentImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
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