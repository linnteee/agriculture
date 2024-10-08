import React from "react";
import { Link } from 'react-router-dom'; 
import farmerIcon from '../assets/farmericon.jpg';

function NavBar() {
    return (
        <nav className="p-10 bg-blue-100">
            <div className="flex items-center">
                <div className="mr-4">
                    <img src={farmerIcon} alt="Farmer Icon" />
                </div>
                <h1 className="text-green-900 font-bold text-6xl font-serif">
                    <Link to="/">AGRO <span className="text-green-950">WORLD</span></Link>
                </h1>
                <div className="ml-auto">
                    <ul className="flex gap-7">
                        <li className="text-black font-bold hover:text-green-500">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-black font-bold hover:text-green-500">
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li className="text-black font-bold hover:text-green-500">
                            <Link to="/Aboutus">About us</Link>
                        </li>
                        <li className="text-black font-bold hover:text-green-500">
                            <Link to="/SignIn">Sign in</Link>
                        </li>
                        <li className="text-black font-bold hover:text-green-500">
                            <Link to="/SignUp">Sign up</Link>
                        </li>
                        <li className="text-black font-bold hover:text-green-500">
                            <Link to="/Products">Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar
