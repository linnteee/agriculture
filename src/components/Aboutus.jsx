import React from "react";
import BackgroundImg from '../assets/aboutusbg.jpg';

function Aboutus() {
  return (
    <div
      className="relative text-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
    
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <h1 className="text-white text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-20 sm:pt-24 md:pt-32">
          About Us
        </h1>

        <p className="text-white text-center text-lg sm:text-xl md:text-2xl my-8 sm:my-12 md:my-16 px-4 sm:px-10 lg:px-20 max-w-4xl font-bold">
          At <span className="text-green-500">AGRO WORLD</span>, we are passionate about supporting the agricultural community by providing high-quality products and resources tailored to your needs. 
          <br className="hidden sm:block" /> Our mission is to empower farmers, gardeners, and agricultural enthusiasts with the tools and knowledge necessary to thrive.
          <br className="hidden sm:block" /> We carefully curate our selection to include sustainable, innovative, and effective solutions, ensuring that you can cultivate your land with confidence.
          <br className="hidden sm:block" /> Join us on this journey to enhance agriculture and make a positive impact on our environment.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;
