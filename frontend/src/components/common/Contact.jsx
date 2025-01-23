import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-12 pd-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div className="text-white space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-6"> Contact Us for Expert Guidance</h2>
            <p className="text-gray-400 mb-8">"Have questions about your fertilizer needs? Our team of experts is here to assist you! Reach out to us today for personalized advice and support."</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-medium">Our Location</p>
                <p className="text-gray-400">No.1, mount pleasent state</p>
                <p className="text-gray-400">kandy, Sri Lanka</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-gray-400">agristate@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-medium">Website</p>
                <p className="text-gray-400">www.Agristatemanagement.lk</p>
              </div>
            </div>
          </div>
          
          {/* Map Display */}
          <div className="mt-8">
            <div className="rounded-lg overflow-hidden h-64 bg-gray-800">
              <img 
                src="/src/assets/images/map.PNG"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">Kandy,Srilanka</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
          </div>
          <form className="space-y-4">
            <div>
              <input 
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-green-600 text-white font-medium px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;