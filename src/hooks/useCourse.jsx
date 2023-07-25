import { useContext } from 'react';

import { CourseContext } from '../context/CourseContext';
export const useCourse = () => {
  return useContext(CourseContext);
};
