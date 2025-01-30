import React, { useState } from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Your EmailJS API key (replace with your own)
  const apiKey = 'rJQX4OLDMv0VGV44N'; // Make sure to get this from your EmailJS account
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('Sending...');

    // Use EmailJS to send the email
    emailjs
      .send(
        'service_7b09jig', // Replace with your EmailJS service ID
        'template_2wxnmi8', // Replace with your EmailJS template ID
        formData,
        apiKey
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setStatusMessage('Your message has been sent!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage('Failed to send the message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

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
                <p className="text-gray-400">Kandy, Sri Lanka</p>
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
            <p className="text-sm text-gray-400 mt-2">Kandy, Sri Lanka</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white font-medium px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <div className="mt-4 text-center text-gray-300">
              <p>{statusMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
