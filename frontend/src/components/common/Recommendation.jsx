import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '/src/css/embla.css';
import { MapPin, Star, Filter } from "lucide-react";

// Fertilizer Recommendation Form Component
const FertilizerRecommendation = () => {
  const [nValue, setNValue] = useState('');
  const [pValue, setPValue] = useState('');
  const [kValue, setKValue] = useState('');
  const [moisture, setMoisture] = useState('');
  const [humidity, setHumidity] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRecommendation = () => {
    // Simple recommendation logic (could be more complex depending on needs)
    if (nValue && pValue && kValue && moisture && humidity) {
      setRecommendation(`Fertilizer recommendation: NPK(${nValue}-${pValue}-${kValue}) with soil moisture of ${moisture}% and humidity of ${humidity}%.`);
    } else {
      setRecommendation('Please fill all fields to get a recommendation.');
    }
  };

  return (
    <div className="bg-gray-500 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">Fertilizer Recommendation</h3>
      <div className="space-y-4">
        <div>
          <label className="text-white">Nitrogen (N):</label>
          <input
            type="number"
            value={nValue}
            onChange={(e) => setNValue(e.target.value)}
            className="mt-1 p-2 w-full text-black rounded-lg"
            placeholder="Enter N value"
          />
        </div>
        <div>
          <label className="text-white">Phosphorus (P):</label>
          <input
            type="number"
            value={pValue}
            onChange={(e) => setPValue(e.target.value)}
            className="mt-1 p-2 w-full text-black rounded-lg"
            placeholder="Enter P value"
          />
        </div>
        <div>
          <label className="text-white">Potassium (K):</label>
          <input
            type="number"
            value={kValue}
            onChange={(e) => setKValue(e.target.value)}
            className="mt-1 p-2 w-full text-black rounded-lg"
            placeholder="Enter K value"
          />
        </div>
        <div>
          <label className="text-white">Soil Moisture (%):</label>
          <input
            type="number"
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
            className="mt-1 p-2 w-full text-black rounded-lg"
            placeholder="Enter soil moisture"
          />
        </div>
        <div>
          <label className="text-white">Humidity (%):</label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            className="mt-1 p-2 w-full text-black rounded-lg"
            placeholder="Enter humidity"
          />
        </div>
        <div>
          <button
            onClick={handleRecommendation}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
          >
            Get Recommendation
          </button>
        </div>
        {recommendation && (
          <div className="mt-4 text-white">
            <strong>{recommendation}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="bg-gray-900">
        {/* Featured Properties */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white"></h2>
            <button className="flex items-center text-green-400 hover:text-green-300">
              <Filter className="h-5 w-5 mr-2" />
              Filter Results
            </button>
          </div>

          {/* Embla Carousel */}
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Sample Carousel Items */}
              {/* Replace this with actual items */}
              <div className="embla__slide rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative">
                 
                </div>
                
              </div>
              {/* More carousel items here */}
            </div>
          </div>

          {/* Fertilizer Recommendation Panel */}
          <div className="mt-12">
            <FertilizerRecommendation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
