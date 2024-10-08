import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Maincontent from './components/Maincontent';
import Footersite from './components/Footersite';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Products from './components/Products';
import AboutUs from './components/Aboutus'; 
import Contact from './components/Contact'; 



function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Maincontent />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footersite />
        </Router>
    );
}

export default App
