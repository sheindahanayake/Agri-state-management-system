import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Heart,
  Camera
} from 'lucide-react';

const TourDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "/src/assets/images/12.jpg",
    "/api/placeholder/1200/800",
    "/api/placeholder/1200/800",
    "/api/placeholder/1200/800"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Image Gallery */}
      <div className="relative h-[70vh] bg-gray-800">
        <img
          src={images[currentImage]}
          alt={`Tour view ${currentImage + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-2 h-2 rounded-full ${
                idx === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Kandy Cultural Heritage Tour
                  </h1>
                  <div className="flex items-center text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Kandy, Sri Lanka</span>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-gray-400">(48 reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-400">$125</div>
                  <div className="text-gray-400">per person</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>8 Hours</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Max 12 People</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Camera className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Photo Spots</span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h2 className="text-xl font-bold text-white mb-4">Tour Overview</h2>
                <p className="text-gray-300 mb-4">
                  Embark on a cultural journey through the heart of Kandy, exploring ancient temples, 
                  traditional markets, and historic landmarks. This comprehensive tour includes visits to 
                  the Temple of the Sacred Tooth Relic, Royal Botanical Gardens, and local craft centers.
                </p>
              </div>
            </div>

            {/* Tour Highlights */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Tour Highlights</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Temple of the Sacred Tooth Relic</h3>
                    <p className="text-gray-300">Visit the renowned Buddhist temple housing a sacred relic.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
                  <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Royal Botanical Gardens</h3>
                    <p className="text-gray-300">Explore one of Asia's most beautiful botanical gardens.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Tour Reviews</h2>
              <div className="space-y-6">
                {[1, 2].map((review) => (
                  <div key={review} className="border-b border-gray-700 pb-6 last:border-0">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-gray-600 mr-3" />
                      <div>
                        <div className="font-medium text-white">Tourist Name</div>
                        <div className="text-gray-400 text-sm">March 2024</div>
                      </div>
                    </div>
                    <p className="text-gray-300">
                      An incredible cultural experience! Our guide was knowledgeable and friendly. 
                      The temple visit was the highlight of our trip to Sri Lanka.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">Book This Tour</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Select Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Number of People</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Preferred Language</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>English</option>
                    <option>Sinhala</option>
                  </select>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Tour Price (2 people)</span>
                    <span className="text-white">$250</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Guide Fee</span>
                    <span className="text-white">$30</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-300">Entrance Fees</span>
                    <span className="text-white">$45</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-white">$325</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white font-medium px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;