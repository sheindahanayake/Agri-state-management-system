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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRecommendation = async () => {
    if (!nValue || !pValue || !kValue || !moisture || !humidity) {
      setError('Please fill all fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/recommend-fertilizer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nitrogen: parseFloat(nValue),
          phosphorus: parseFloat(pValue),
          potassium: parseFloat(kValue),
          moisture: parseFloat(moisture),
          humidity: parseFloat(humidity)
        })
      });

      const data = await response.json();
      if (response.ok) {
        setRecommendation(data.recommendation);
      } else {
        throw new Error(data.message || 'Failed to get recommendation');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
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
            disabled={isLoading}
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : 'Get Recommendation'}
          </button>
        </div>
        {error && (
          <div className="mt-4 text-red-300">
            <strong>{error}</strong>
          </div>
        )}
        {recommendation && (
          <div className="mt-4 text-white">
            <strong>{recommendation}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

// Rest of the component remains the same
export default FertilizerRecommendation;