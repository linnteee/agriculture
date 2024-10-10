import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import farmerIcon from '../assets/farmericon.jpg';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="p-10 bg-blue-100">
            <div className="flex items-center justify-between items-baseline">
                <div className="flex items-center">
                    <div className="mr-4">
                        <img src={farmerIcon} alt="Farmer Icon" />
                    </div>
                    <h1 className="text-green-900 font-bold text-6xl font-serifs">
                        <Link to="/">AGRO <span className="text-green-950">WORLD</span></Link>
                    </h1>
                </div>
                
    
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>


                <div className="hidden md:block">
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

        
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col items-center gap-4 mt-4">
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
            )}
        </nav>
    );
}

export default NavBar;
