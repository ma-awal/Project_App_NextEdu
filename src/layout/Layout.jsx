import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { NavProvider } from '../context/NavContext';

const Layout = () => {
  return (
    <>
      <NavProvider>
        <Header />
      </NavProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
