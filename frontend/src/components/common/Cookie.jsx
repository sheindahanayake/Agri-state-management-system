import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4 relative">
        <div className="relative">
          <img src="/src/assets/images/agri 123.jpg" alt="Cookie Policy" className="mb-8 mx-auto w-full h-64 object-cover" /> {/* Adjusted image size */}
          <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl font-bold mb-20 text-center text-white">Cookie Policy</h1> {/* Increased font size */}
        </div>
        <p className="mb-4">
          This Cookie Policy explains how [website name] ("we", "us", "our") uses cookies and similar technologies to recognize you when you visit our website at [website URL]. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. What are cookies?</h2>
        <p className="mb-4">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. Why do we use cookies?</h2>
        <p className="mb-4">
          We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. How can I control cookies?</h2>
        <p className="mb-4">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. What about other tracking technologies?</h2>
        <p className="mb-4">
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our website or opened an email including them.
        </p>
        <h2 className="text-2xl font-bold mb-4">5. How often will you update this Cookie Policy?</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
        </p>
        <h2 className="text-2xl font-bold mb-4">6. Where can I get further information?</h2>
        <p className="mb-4">
          If you have any questions about our use of cookies or other technologies, please email us at [contact information].
        </p>
      </div>
    </div>
  );
}

export default CookiePolicy;