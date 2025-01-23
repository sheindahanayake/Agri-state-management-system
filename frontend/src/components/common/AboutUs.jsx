import React from 'react';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="/src/assets/images/aboutus.jpg"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto h-full flex items-center px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Best fertilizer recommendation system in Sri Lanka
              </h1>
              <p className="text-xl text-gray-200">
                recommending best fertilizer solutions for you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Product</h2>
              <p className="text-gray-300 mb-4">
              The system uses a network of sensors to gather real-time data on soil conditions. This data is then analyzed by a processing unit to provide insights into soil health and nutrient needs.
              </p>
              <p className="text-gray-300">
              Based on the analysis, the system generates personalized fertilizer recommendations tailored to the specific needs of the crops and soil conditions.
              </p>
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/product.jpeg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-gray-300">farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">2000+</div>
              <div className="text-gray-300">recommendations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-gray-300">Years </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Recommendations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Award className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
              Precision and Accuracy
              </h3>
              <p className="text-gray-300">
              "Our system uses advanced algorithms to provide the most accurate fertilizer recommendations based on your soil's unique conditions. Get tailored suggestions that optimize your crop yield with precision."              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Clock className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
              Real-Time Data Integration
              </h3>
              <p className="text-gray-300">
              "Our system integrates real-time data, ensuring that your recommendations stay up to date with the latest soil readings. Adjustments are made instantly based on changes in moisture, humidity, and nutrient levels."
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">
              Customized Recommendations
              </h3>
              <p className="text-gray-300">
              "Unlike one-size-fits-all solutions, our fertilizer recommendations are personalized to your specific soil composition, nutrient levels (N, P, K), moisture, and humidity. We ensure your plants get exactly what they need for healthy growth."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-800 pd">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                  <img
                    src="/src/assets/images/man-1.jpg"
                    alt={`Team Member ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Team Member {member}
                </h3>
                <p className="text-gray-300">Position</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;