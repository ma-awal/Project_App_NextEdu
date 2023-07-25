import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import { GalleryProvider } from '../../context/GalleryContext';
import GalleryMenu from '../../components/GalleryMenu copy/GalleryMenu';
const Gallery = () => {
  return (
    <GalleryProvider>
      <PropCard name={'Gallery'} link={'Home'} />
      <GalleryMenu />
    </GalleryProvider>
  );
};

export default Gallery;
