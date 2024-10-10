import React from "react";
import BackgroundImg from '../assets/background.jpg';
import { useNavigate } from "react-router-dom";

function Maincontent() {
  const navigate = useNavigate();
  
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (  
    <div
      className="relative text-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
    
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
    
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-20 md:pt-32">
          WELCOME TO AGRO WORLD
        </h1>
        <p className="text-white mt-4 sm:mt-6 md:mt-10 text-xl sm:text-2xl md:text-3xl font-bold">
          DISCOVER OUR RANGE OF PRODUCTS AND SERVICES
        </p>
        <p className="text-white text-center mt-6 sm:mt-8 md:mt-10 max-w-2xl font-bold">
          At <span className="text-green-500">AGRO WORLD</span>, we are passionate about supporting the agricultural
          <br className="hidden sm:block" />
          community by providing high-quality products and resources tailored to your needs.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-6 sm:mt-8 md:mt-10 rounded transition"
          onClick={handleSignUpClick}
        >
          Get Started 
        </button>
      </div>
    </div>
  );
}

export default Maincontent;
