import React from 'react';

import FeatureSlide from './FeatureSlide';
import CoursesData from '../../data/CoursesData';
const FeatureCourese = () => {
  return (
    <section className="F-course py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <div className="H-head">
          <h5>Best Courses</h5>
          <h2>Featured Courses</h2>
        </div>
        <div className="row justify-content-center">
          <FeatureSlide data={CoursesData} />
        </div>
      </div>
    </section>
  );
};

export default FeatureCourese;
