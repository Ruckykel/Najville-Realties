import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Kemi Aderigbigbe",
    role: "Trader",
    text: "Idera residentials is an exceptional location to own a plot, and visiting it in person feels like a dream come true for anyone aspiring to grow.",
    avatar: "/consult.webp"
  },
  {
    id: 2, 
    name: "Uzochi Christopher",
    role: "Entrepreneur",
    text: "Doing business with Dradrock has been an incredible experience. Dradrock has ensured a seamless process from payment to allocation.",
    avatar: "/consult.webp"
  },
  {
    id: 3,
    name: "John Doe",
    role: "Investor",
    text: "The experience has been amazing. The customer service is top notch and the properties are premium quality.",
    avatar: "/consult.webp"
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "Homeowner",
    text: "Dradrock has exceeded all my expectations. From purchase to documentation, it was seamless!",
    avatar: "/consult.webp"
  },
  {
    id: 5,
    name: "Samuel Johnson",
    role: "Investor",
    text: "A trustworthy company with premium properties. Highly recommend their services!",
    avatar: "/consult.webp"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(2); // Default to 2 items for larger screens

  // Adjust the number of testimonials to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };

    updateItemsToShow(); // Run on initial render
    window.addEventListener('resize', updateItemsToShow); // Adjust on resize

    return () => window.removeEventListener('resize', updateItemsToShow); // Cleanup listener
  }, []);

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#635d4b] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-sm font-semibold tracking-wider uppercase text-white">
             TESTIMONIALS
            </h2>
            <div className="w-12 h-0.5 bg-[#AF8A2D] mt-2 mb-6"></div>
            <h3 className="text-4xl font-bold mb-6 text-white">
              What our clients says..
            </h3>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white hover:bg-[#AF8A2D] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white hover:bg-[#AF8A2D] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-md p-8 relative"
            >
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-[#AF8A2D]">{testimonial.role}</p>
                <p className="mt-4 text-sm text-gray-600">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
