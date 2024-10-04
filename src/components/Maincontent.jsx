import React from "react";

function Maincontent() {
    return (
        <div className="relative text-center h-lvh bg-[url('./src/assets/background.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div> 
            <div className="relative z-10">
                <h1 className="text-white font-bold text-4xl pt-44">WELCOME TO AGRO WORLD</h1>
                <p className="text-white mt-10 text-3xl font-bold">
                    DISCOVER OUR RANGE OF PRODUCTS AND SERVICES
                </p>
                <p className="text-white text-center mt-10 pt-11 pl-11 font-bold">
                    At <span className="text-green-500">AGRO WORLD</span>, we are passionate about supporting the agricultural
                    <br />
                    community by providing high-quality products and resources tailored to your needs.
                </p>
            </div>
        </div>
    );
}

export default Maincontent;




