import { createContext, useState } from 'react';
import CoursesData from '../data/CoursesData';
const CourseContext = createContext();
const allCategories = [
  'All Projects',
  ...new Set(CoursesData.map((item) => item.category)),
];
const CourseProvider = ({ children }) => {
  const [menu, setMenu] = useState(CoursesData);
  const [categories, setCategories] = useState(allCategories);
  const filteredItems = (category) => {
    if (category === 'All Projects') {
      setMenu(CoursesData);
      return;
    }
    const newItems = CoursesData.filter((item) => item.category === category);
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
    <CourseContext.Provider value={courseValue}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseContext, CourseProvider };
