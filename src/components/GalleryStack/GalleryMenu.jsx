import React from 'react';
import GalleryCard from './GalleryCard/GalleryCard';
import Categories from './Categories/Categories';
import './G-menu.css';
const GalleryMenu = () => {
  return (
    <section className=" G-menu py-3 py-lg-4 my-3 my-md-4 my-lg-5">
      <div className="container-fluid">
        <Categories />
        <GalleryCard />
      </div>
    </section>
  );
};

export default GalleryMenu;
