import React from 'react';

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0 flex items-center">
              <img src="/src/assets/images/Logo.png" alt="Company Logo" className="mb-4 w-32 mx-auto md:mx-0" /> {/* Add your logo path and adjust size */}
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-4 text-white">Contact Details</h3>
                <ul className="space-y-2">
                  <li className="mb-2 text-white">Location: 1 Agriculture St, Kandy, Sri Lanka</li>
                  <li className="mb-2 text-white">Email: Agristatemanagement@gmail.com</li>
                  <li className="mb-2 text-white">Phone: (011) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0 md:ml-auto">
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="about" className="text-gray-400 hover:text-green-400">About Us</a></li>
                <li><a href="contact" className="text-gray-400 hover:text-green-400">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="privacy" className="text-gray-400 hover:text-green-400">Privacy Policy</a></li>
                <li><a href="terms" className="text-gray-400 hover:text-green-400">Terms of Service</a></li>
                <li><a href="cookie" className="text-gray-400 hover:text-green-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 AGRI STATE MANAGEMENT SYSTEM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;