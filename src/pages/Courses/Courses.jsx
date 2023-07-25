import React from 'react';
import PropCard from '../../components/PropCard/PropCard';

import CourseMenu from '../../components/CourseMenu/CourseMenu';
import { CourseProvider } from '../../context/CourseContext';

const Courses = () => {
  return (
    <CourseProvider>
      <PropCard name={'Courses'} link={'Home'} />
      <CourseMenu />
    </CourseProvider>
  );
};

export default Courses;
