import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4 relative">
        <div className="relative">
          <img src="/src/assets/images/agri 123.jpg" alt="Privacy Policy" className="mb-8 mx-auto w-full h-64 object-cover" /> {/* Adjusted image size */}
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl font-bold mb-20 text-center text-white">Privacy Policy</h1> {/* Increased font size */}
        </div>
        <p className="mb-4">
          Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, [website name], and other sites we own and operate.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
        <p className="mb-4">
          We use the information we collect in various ways, including to provide, operate, and maintain our website, improve, personalize, and expand our website, understand and analyze how you use our website, develop new products, services, features, and functionality, communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes, process your transactions, and send you related information, including purchase confirmations and invoices, and send you text messages and push notifications.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
        <p className="mb-4">
          We protect your personal information within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
        <p className="mb-4">
          We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site and serve you content based on preferences you have specified.
        </p>
        <h2 className="text-2xl font-bold mb-4">5. Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
        <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at [contact information].
        </p>
      </div>
    </div>
  );
}

export default Privacy;