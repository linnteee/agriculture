import React from "react";
import BackgroundImg from '../assets/aboutusbg.jpg';



function Aboutus() {
  return (
    
    <div className="relative text-center h-lvh bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
   >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10">
  
      <h1 className="text-white text-center font-bold text-5xl space-x-12 pt-44 ">
        About Us
      </h1>


      <p className="text-white text-center text-xl my-44 px-11 font-bold">
        At <span>AGRO WORLD
          </span>, we are passionate about supporting the agricultural
        community by providing high-quality products and resources tailored to
        your needs. 
        <br /> Our mission is to empower farmers, gardeners, and
        agricultural enthusiasts with the tools and knowledge necessary to
        thrive.
         <br /> We carefully curate our selection to include
        sustainable, innovative, and effective solutions, ensuring that you can
        cultivate your land with confidence.
         <br /> Join us on this journey to
        enhance agriculture and make a positive impact on our environment.
      </p>
      </div>
      </div>
  
  );
}

export default Aboutus;
