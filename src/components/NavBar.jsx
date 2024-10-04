import React from "react";
import farmerIcon from '../assets/farmericon.jpg';



function NavBar(){
    return (
        <nav className="p-10 bg-blue-100">
            <div className="flex justify-between">
            <img src={farmerIcon} alt="farmer Icon" />
                <h1 className="text-green-900 font-bold text-6xl font-serif">
                    <a href="/">AGRO WORLD</a>
                </h1>
            
                <ul className="flex gap-7">
                    <li className="text-black font-bold hover:text-green-500">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-black font-bold hover:text-green-500">
                        <a href="/Contact.html">Contact</a>
                    </li>
                    <li className="text-black font-bold hover:text-green-500">
                        <a href="/Aboutus.html">About us</a>
                    </li>
                    <li className="text-black font-bold hover:text-green-500">
                        <a href="/SignIn.html">Sign in</a>
                    </li>
                    <li className="text-black font-bold hover:text-green-500">
                        <a href="/SignUp.html">Sign up</a>
                    </li>
                </ul>
                <div>
                
                </div>
            </div>
        </nav>
         
         
         
    )
}

export default NavBar