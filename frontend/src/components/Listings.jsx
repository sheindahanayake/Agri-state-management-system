import React, { useState } from "react";
import PropertyFilter from "./common/fertilizerFilter";
import AboutUs from "./common/AboutUs";
import Recommendation from "./common/Recommendation";
import Layout from "./common/Layout";


const Listings = () => {
  return (
    <div className="bg-gray-900">
      <Layout>
        

            
              {/*recommendation Section */}
              <Recommendation />

              {/* Property Type Filter */}
              
            
          
        
        {/* About Us Section */}
        <AboutUs />
      </Layout>
    </div>
  );
};

export default Listings;