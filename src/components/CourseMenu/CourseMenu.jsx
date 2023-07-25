import React from 'react';
import CourseCard from './CourseCard/CourseCard';
import Categories from './Categories/Categories';
import './CourseMenu.css';
const CourseMenu = () => {
  return (
    <section className="CourseMenu py-3 py-lg-4 py-lg-5 ">
      <div className="container py-3 py-lg-4 py-lg-5">
        <Categories />
        <CourseCard />
      </div>
    </section>
  );
};

export default CourseMenu;
