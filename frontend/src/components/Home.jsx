import React, { useState } from "react";
import Hero from "./common/Hero";
import fertilizerFilter from "./common/fertilizerFilter";
import Recommendation from "./common/Recommendation";
import FeedBack from "./common/FeedBack";
import Layout from "./common/Layout";
 
import ChatBox from "./common/ChatBox";


const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <Layout>
        
        <Hero />

       

            
             
              <Recommendation />

              
              <fertilizerFilter />
            
          
      

        {/*Chat Box */}
        <ChatBox/>

        {/*Customer Feed back */}
        <FeedBack />

        
        
      </Layout>
    </div>
  );
};

export default HomePage;