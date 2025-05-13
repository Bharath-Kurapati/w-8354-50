
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const SocialProof = () => {
  const logos = [
    { name: "Herb Pharm", logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop&auto=format" },
    { name: "Brand Two", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format" },
    { name: "Brand Three", logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop&auto=format" },
    { name: "Brand Four", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&auto=format" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-gray-700">
            Trusted by mid-market brands from <span className="font-semibold">$20-55M</span> in revenue.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-4">
                  <div className="bg-white rounded-lg p-6 h-24 flex items-center justify-center">
                    <img
                      src={logo.logo}
                      alt={logo.name}
                      className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProof;
