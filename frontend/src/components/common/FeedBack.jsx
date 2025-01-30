import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sam Johnson, Senior Research Scientist",
    feedback: "The fertilizer recommendation system has significantly improved our efficiency in creating tailored solutions for different soil types. The accuracy of nutrient requirements for various plant species has been on point, and the system integrates well with our lab's data. However, I would recommend adding a feature that allows for more detailed input on soil pH and moisture levels, as these can greatly impact fertilizer efficiency."

,
    location: " GreenTech Labs, Soil Science Division",
    rating: 5,
    image: "/src/assets/images/people 1.jpg",
  },
  {
    id: 2,
    name: " Mark Thompson, Laboratory Operations Manager",
    feedback: "Overall, I’m impressed with how easy it is to use the fertilizer recommendation system. It has streamlined the process for our team, and the recommendations are usually quite precise. That said, some of the suggestions for organic fertilizers could benefit from more customizable options, as certain organic products are more suitable for specific regions or farming methods.",


    location: "AgriChem Research Institute, Fertilizer Optimization Unit",
    rating: 5,
    image: "/src/assets/images/people 2.jpg",
  },
  {
    id: 3,
    name: " Emily Davis, Research Laboratory Assistant Manager",
    feedback: "The system is great for quickly narrowing down the best fertilizers for a given crop, but I’ve noticed that some recommendations tend to focus too much on generic blends. We need more insights into specialized fertilizers for niche crops like berries or exotic plants. A more comprehensive database of lesser-known fertilizers would be a great addition to improve overall accuracy and usefulness.",
    location: "EcoFarm Labs, Plant Nutrition Research Center",
    rating: 4,
    image: "/src/assets/images/people 3.jpg",
  },
];

const TestimonialCard = ({ name, feedback, location, rating, image }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover shadow-md"
      />
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-sm italic">"{feedback}"</p>
  </div>
);

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Read trusted reviews from our satisfied customers about their experience with our fertilizer recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
