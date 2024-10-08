import React from 'react';
import { Link } from 'react-router-dom';

function Footersite() {
    return (
        <footer className="bg-green-300 w-full flex flex-col md:flex-row text-white p-10">
            <div className="flex-1 mb-6 md:mb-0">
                <h2 className="font-bold text-4xl mb-4">Explore</h2>
                <ul className="list-none space-y-2">
                    <li className="font-bold hover:text-green-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-bold hover:text-green-500">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="font-bold hover:text-green-500">
                        <Link to="/aboutus">About Us</Link>
                    </li>
                  
                    <li className="font-bold hover:text-green-500">
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li className="font-bold hover:text-green-500">
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>

            <div className="flex-1 mb-6 md:mb-0">
                <h2 className="font-bold text-4xl mb-4">Services</h2>
                <ul className="list-none space-y-2">
                    <li className="font-bold hover:text-green-500">
                        <Link to="/services/service1">Service 1</Link>
                    </li>
                    <li className="font-bold hover:text-green-500">
                        <Link to="/services/service2">Service 2</Link>
                    </li>
                    <li className="font-bold hover:text-green-500">
                        <Link to="/services/service3">Service 3</Link>
                    </li>
                </ul>
            </div>

            <div className="flex-1">
                <h2 className="font-bold text-4xl mb-4">Contact</h2>
                <ul className="space-y-2">
                    <li className="font-bold hover:text-green-500">
                        <Link to="/contact" className="hover:text-green-500">Contact Us</Link>
                    </li>
                    <li className="font-bold">@email.com</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footersite
