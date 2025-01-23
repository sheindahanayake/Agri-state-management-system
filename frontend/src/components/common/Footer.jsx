import React from 'react'

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Fertilizer Types</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Organic Fertilizers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Chemical Fertilizers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">NPK Fertilizers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Liquid Fertilizers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Popular Plants</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Tomatoes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Corn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Lettuce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Potatoes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400">Sustainability</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 AGRI STATE MANAGEMENT SYSTEM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
