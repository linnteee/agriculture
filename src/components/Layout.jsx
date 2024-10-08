import React from 'react';
import NavBar from './components/NavBar';
import Footersite from './components/Footersite';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footersite />
    </div>
  );
};

export default Layout;
