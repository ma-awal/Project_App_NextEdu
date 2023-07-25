import { createContext, useState } from 'react';
import GalleryData from '../data/GalleryData';
const GalleryContext = createContext();
const allCategories = [
  'All Projects',
  ...new Set(GalleryData.map((item) => item.category)),
];
const GalleryProvider = ({ children }) => {
  const [menu, setMenu] = useState(GalleryData);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === 'All Projects') {
      setMenu(GalleryData);
      return;
    }
    const newItems = GalleryData.filter((item) => item.category === category);
    setMenu([...newItems]);
  };

  const courseValue = {
    menu,
    setMenu,
    categories,
    setCategories,
    filteredItems,
  };
  return (
    <GalleryContext.Provider value={courseValue}>
      {children}
    </GalleryContext.Provider>
  );
};

export { GalleryContext, GalleryProvider };
